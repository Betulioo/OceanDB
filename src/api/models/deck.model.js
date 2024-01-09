const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deckSchema = new Schema(
  {
    name: { type: String, require: true },
    cards: [{ type: Schema.ObjectId, ref: "Card" }],
    img: { type: String, default: "" },
  },
  {
    collection: "Deck",
  }
);

const Deck = mongoose.model("Deck", deckSchema);
module.exports = Deck;
