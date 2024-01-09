const express = require("express")
const { getDeck, getDeckById,  postDeck, putDeck, deleteDeck,getDeckByName } = require("../controllers/deck.controllers")
const upload = require("../../middleware/upload.cloudy")
const router = express.Router()

router.get("/", getDeck);
router.get("/:id", getDeckById);
router.post("/", postDeck);
router.get("/:deckName", getDeckByName);
router.put("/:id", putDeck);
router.delete("/:id", deleteDeck)



module.exports = router;