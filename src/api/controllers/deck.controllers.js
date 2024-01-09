const Deck = require("../models/deck.model");

const getDeck = async (req, res) => {
  try {
    const deck = await Deck.find().populate("cards");

    return res.status(200).json(deck);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getDeckById = async (req, res) => {
  try {
    const { id } = req.params;
    const deck = await Deck.findById(id).populate("cards");
    if (!deck) {
      return res
        .status(404)
        .json({ message: `No Deck with ID: ${id} was found! :(` });
    } else {
      return res.status(200).json(deck);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postDeck = async (req, res) => {
  try {
    //---- This is for cloudinary route -----
    // console.log(req.file.path);
    // if (req.file.path) {
    //   videogame.image = req.file.path;
    // }
    //---- here ends This is for cloudinary route -----
    const body = req.body;
    const deck = new Deck(body);
    const createdDeck = await deck.save();
    return res.status(200).json(createdDeck);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putDeck = async (req, res) => {
  try {
    //---- This is for cloudinary route -----
    // console.log(req.file.path);
    // if (req.file.path) {
    //   videogameBody.image = req.file.path;
    // }
    //---- here ends This is for cloudinary route -----
    const { id } = req.params;
    const putDeck = new Deck(req.body);
    putDeck._id = id;
    const updateDeck = await Deck.findByIdAndUpdate(
      id,
      putDeck,
      { new: true }
    );
    if (!updateDeck){
        return res.status(404).json({ message: `No Deck with ID: ${id} was found! :(` })
    }
    return res.status(200).json(updateDeck);
  } catch (error) {
    return res.status(500).json(error)
  }
};
const deleteDeck = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteDeck = await Deck.findByIdAndDelete(id);
    if (!deleteDeck) {
      return res.status(404).json({ message: `No Deck with ID: ${id} was found! :(` });
    }
    return res.status(200).json(deleteDeck);
  } catch (error) {
    return res.status(500).json(error)
  }
};
const getDeckByName = async (req, res) => {
  try {
    const { deckName } = req.params;
    const deck = await Deck.find({ name: deckName }).populate("cards");
    return res.status(200).json(deck);
  } catch {
    return res.status(500).json(error);
  }
};
module.exports = {
  getDeck,
  getDeckById,
  postDeck,
  putDeck,
  deleteDeck,
  getDeckByName
};
