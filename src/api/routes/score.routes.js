const express = require("express")
const { getScore, getScoreById,  postScore, putScore,deleteScore } = require("../controllers/score.controllers")
const upload = require("../../middleware/upload.cloudy")
const router = express.Router()

router.get("/", getScore);
router.get("/id/:id", getScoreById);
router.post("/", postScore);
router.put("/:id", putScore);
router.delete("/:id", deleteScore)



module.exports = router;