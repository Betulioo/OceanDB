const express = require("express")
const { getCollection, getCollectionById,  postCollection, putCollection, deleteCollection,getCollectionByName } = require("../controllers/collection.controllers")
const upload = require("../../middleware/upload.cloudy")
const router = express.Router();

router.get("/id/:id", getCollectionById);
router.get("/:collectionName", getCollectionByName);
router.get("/", getCollection);
router.post("/", postCollection);
router.put("/:id", putCollection);
router.delete("/:id", deleteCollection)



module.exports = router;