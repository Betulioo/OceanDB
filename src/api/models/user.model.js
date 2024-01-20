const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: { type: String },
    password: { type: String, required: true },
    username: { type: String, default: "explorer", required: true },
    role: { type: String, default: "explorer", enum: ["admin", "explorer"] },
    collection: { type: Schema.ObjectId, ref: "Collection" }

}, {
    collection: "User"
});


const User = mongoose.model("User", userSchema)
module.exports = User;