const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema(
  {
    img: { type: String, required: true },
    description: { type: String, required: true },
    name: { type: String },
  },
  {
    collection: "Card",
  }
);

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;
