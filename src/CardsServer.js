const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
//const dotenv = require('dotenv');
//dotenv.config({ path: "../"});

require('dotenv').config();
const config = {
  port: process.env.PORT || 3000,
  dataPath : process.env.dataPath || __dirname + "\\cards\\"
}


/* ***********************************************************
 *
 * HELPERS
 *
 * ********************************************************* */
function leftPad(num, length, padString="0") {
  var str = num.toString();
  while (str.length < length)
      str = padString + str;
  return str;
}

function saveCard(card, id=undefined)
{
  let fileName

  console.log("Saving Card")
  if (id in cardFileNames) {
    console.log("Card exists")
    fileName = cardFileNames[id]
  }
  else {
    console.log("Creating new card")
    id = Object.keys(cardFileNames).length + 1
    fileName = "Card_" + leftPad(id, 4) + ".json"
    console.log(id, "=>", fileName)
    cardFileNames[id] = fileName
  }

  fs.writeFile(config.dataPath + fileName, JSON.stringify(card, null, 2), 'utf8', function() { })

  return id
}


/* ***********************************************************
 *
 * Analysing Card Database
 *
 * *********************************************************** */
var cardIds = []
var cardFileNames = {}

const readStoredCards = function () {
  console.log("Reading cards in directory '" + config.dataPath + "'");
  fs.readdir(config.dataPath, function (err, fileNames) {
    for (var i = 0; i < fileNames.length; i++) {
      var fileName = fileNames[i];
      if (fileName.startsWith("Card_") && fileName.endsWith(".json")) {
        var cardId = parseInt(fileName.substring(5, fileName.length - 5))
        cardIds.push(fileName)
        cardFileNames[cardId] = fileName
      }
    }
    console.log("Found " + cardIds.length + " cards.")
  });
}

/* ***********************************************************
 *
 * Server routes handlers
 *
 * *********************************************************** */
const getCardIds = (request, response) => { response.status(200).json(Object.keys(cardFileNames)) }

/* GET */
const getCardById = (request, response) => {
  const id = parseInt(request.params.id)
  console.log("Requesting card #" + id)
  if (request.params.id in cardFileNames) {
    console.log("Card #" + id + " found.")
    fs.readFile(config.dataPath + cardFileNames[id], 'utf8', function(err, data) {
      response.status(200).json(JSON.parse(data))
    });
  }
  else {
    response.status(200).json({})
  }
}

/* UPDATE */
const updateCard = (request, response) => {
  const id = parseInt(request.params.id)
  console.log("Updating card #" + id + ":", request.body)
  saveCard(request.body, id)

  response.status(200).json( { id: id })
}

/* INSERT/CREATE */
const createCard = (request, response) => {
  console.log("Inserting card:", request.body)
  const id = saveCard(request.body)
  response.status(201).json({ insertedId: id })
}

/* DELETE */
const deleteCard = (request, response) => {
  const id = parseInt(request.params.id)
  console.log("DELETE card #" + id)
  const fileName = cardFileNames[id]
  if (fileName) {
    console.log("Deleting file " + config.dataPath + fileName)
    fs.unlink(config.dataPath + fileName, function() {})
    response.status(200).json({ })
  }
  else {
    const msg = "Warning: Card #" + id + " not found."
    console.log(msg)
    response.status(400).json({ msg: msg })
  }
}

/* ***********************************************************
 *
 * Server setup
 *
 * *********************************************************** */
const runServer = function()
{
  console.log("*********************************************")
  console.log("*                                           *")
  console.log("*  Card Server at port", config.port, "                *")
  console.log("*                                           *")
  console.log("*********************************************")
  const app = express()

  readStoredCards()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true,}))

  app.get('/', (request, response) => {
    response.send('<p>Node.js Card Server</p>')
  })
  app.get('/cards/ids', getCardIds)
  app.get('/card/:id', getCardById)
  app.put('/card/:id', updateCard)
  app.post('/cards', createCard)
  app.delete('/card/:id', deleteCard)

  /* RUN SERVER */
  app.listen(config.port, () => {
    console.log(`Card server is running on port ${config.port}.`)
  })
}


runServer()
