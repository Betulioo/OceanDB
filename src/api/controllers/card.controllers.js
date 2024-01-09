const Card = require("../models/card.model");

const getCard = async (req, res) => {
  try {
    const card = await Card.find();

    return res.status(200).json(card);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getCardById = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);
    if (!card) {
      return res.status(404).json({ message: `No Card with ID: ${id} was found! :(` });
    } else {
      return res.status(200).json(card);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCard = async (req, res) => {
  try {
    //---- This is for cloudinary route -----
    // console.log(req.file.path);
    // if (req.file.path) {
    //   videogame.image = req.file.path;
    // }
    //---- here ends This is for cloudinary route -----
    const body = req.body;
    const card = new Card(body);
    const createdCard = await card.save();
    return res.status(200).json(createdCard);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putCard = async (req, res) => {
  try {
    //---- This is for cloudinary route -----
    // console.log(req.file.path);
    // if (req.file.path) {
    //   videogameBody.image = req.file.path;
    // }
    //---- here ends This is for cloudinary route -----
    const { id } = req.params;
    const putCard = new Card(req.body);
    putCard._id = id;
    const updateCard = await Card.findByIdAndUpdate(
      id,
      putCard,
      { new: true }
    );
    if (!updateCard){
        return res.status(404).json({ message: `No Card with ID: ${id} was found! :(` })
    }
    return res.status(200).json(updateCard);
  } catch (error) {
    return res.status(500).json(error, {message: `There was an error: ${error}`})
  }
};
const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCard = await Card.findByIdAndDelete(id);
    if (!deleteCard) {
      return res.status(404).json({ message: `No Card with ID: ${id} was found! :(` });
    }
    return res.status(200).json(deleteCard);
  } catch (error) {
    return res.status(500).json(error)
  }
};
const getCardByName = async (req, res) => {
  try {
    const { cardName } = req.params;
    console.log(cardName);
    const card = await Card.find({ name: cardName });
    return res.status(200).json(card);
  } catch {
    return res.status(500).json(error);
  }
};
module.exports = {
  getCard,
  getCardById,
  postCard,
  putCard,
  deleteCard,
  getCardByName
};
