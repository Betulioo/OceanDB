const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scoreSchema = new Schema(
  {
    score: { type: String, required: true },
    time: { type: Number },
    attempts: { type: Number },
    date: {type: Date}
  },
  {
    collection: "Score",
  }
);

const Score = mongoose.model("Score", scoreSchema);
module.exports = Score;
