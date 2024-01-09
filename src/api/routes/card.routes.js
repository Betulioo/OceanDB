const express = require("express")
const { getCard, getCardById,  postCard, putCard, deleteCard,getCardByName } = require("../controllers/card.controllers")
const upload = require("../../middleware/upload.cloudy")
const router = express.Router()

router.get("/", getCard);
router.get("/id/:id", getCardById);
router.post("/", postCard);
router.get("/name/:cardName", getCardByName);
router.put("/:id", putCard);
router.delete("/:id", deleteCard)



module.exports = router;