const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const collectionSchema = new Schema(
  {
    name: { type: String, require: true },
    deckId: [{ type: Schema.ObjectId, ref: "Deck" }],
    userId: { type: Schema.ObjectId, ref: "User" },
  },
  {
    collection: "Collection",
  }
);

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;
