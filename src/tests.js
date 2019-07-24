let cards = require ("./cardsclient")


if (false) {
    cards.insertCard(
      { name: "Inserted Card" },
      function (id) {
        cards.getCard(id, function(card) {
          card["Update Time"] = "Update"
          cards.updateCard(card, id, function() {
            cards.deleteCard(id)
          })
        })
      }
    )
  }
  
  if (true) {
    cards.deleteCard(11)
  }