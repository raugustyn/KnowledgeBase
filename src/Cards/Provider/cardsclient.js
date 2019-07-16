let fetch = require('node-fetch');

const SERVER_URL = 'http://localhost:3000'

/* UPDATE */
module.exports.updateCard = function(card, id, hook=undefined)
{
  console.log("*** UPDATE ***")

  fetch(SERVER_URL + '/card/' + id, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(card)
  })
    .then(response => {
      console.log("UPDATE CARD Responded: ")
      return response.json()
    })
    .then(data => {
      console.log(data)
      if (hook) {
        hook(data)
      }
    })
    .catch(errorMessage => { console.log(errorMessage); });
}

/* GET */
module.exports.getCard = function(id, hook=undefined) {
  console.log("*** GET #" + id + " ***")
  fetch(SERVER_URL + '/card/' + id, { method: 'GET' })
    .then(response => {
      console.log("GET CARD Responded: ")
      return response.json()
    })
    .then(data => {
      let card = data
      console.log(card)
      if (hook) {
        hook(card, id)
      }
    })
    .catch(errorMessage => { console.log(errorMessage); });
}

/* INSERT */
module.exports.insertCard = function(card, hook=undefined)
{
  console.log("*** INSERT ***")
  fetch(SERVER_URL + '/cards', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(card)
  })
    .then(response => {
      console.log("INSERT Responded: ")
      return response.json();
    })
    .then(data => {
      console.log(data)
      if (hook) {
        hook(data.insertedId)
      }
    })
    .catch(errorMessage => {console.log(errorMessage);});
}

/* DELETE */
module.exports.deleteCard = function(id, hook=undefined) {
  console.log("*** DELETE ***")
  fetch(SERVER_URL + '/card/' + id, { method: 'DELETE' })
    .then(response => {
      console.log("DELETE Responded: ", response)
    })
    .then(data => {
      if (hook) { hook() }
    })
    .catch(errorMessage => { console.log(errorMessage); });
}
