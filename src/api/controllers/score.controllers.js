const Score = require("../models/score.model");

const getScore = async (req, res) => {
  try {
    const score = await Score.find().populate("userId");

    return res.status(200).json(score);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getScoreById = async (req, res) => {
  try {
    const { id } = req.params;
    const score = await Score.findById(id);
    if (!Score) {
      return res.status(404).json({ message: `No Score with ID: ${id} was found! :(` });
    } else {
      return res.status(200).json(score);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postScore = async (req, res) => {
  try {
    //---- This is for cloudinary route -----
    // console.log(req.file.path);
    // if (req.file.path) {
    //   videogame.image = req.file.path;
    // }
    //---- here ends This is for cloudinary route -----
    const body = req.body;
    const score = new Score(body);
    const createdScore = await score.save();
    return res.status(200).json(createdScore);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putScore = async (req, res) => {
  try {
    //---- This is for cloudinary route -----
    // console.log(req.file.path);
    // if (req.file.path) {
    //   videogameBody.image = req.file.path;
    // }
    //---- here ends This is for cloudinary route -----
    const { id } = req.params;
    const putScore = new Score(req.body);
    putScore._id = id;
    const updateScore = await Score.findByIdAndUpdate(
      id,
      putScore,
      { new: true }
    );
    if (!updateScore){
        return res.status(404).json({ message: `No Score with ID: ${id} was found! :(` })
    }
    return res.status(200).json(updateScore);
  } catch (error) {
    return res.status(500).json(error, {message: `There was an error: ${error}`})
  }
};
const deleteScore = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteScore = await Score.findByIdAndDelete(id);
    if (!deleteScore) {
      return res.status(404).json({ message: `No Score with ID: ${id} was found! :(` });
    }
    return res.status(200).json(deleteScore);
  } catch (error) {
    return res.status(500).json(error)
  }
};
const getScoreByName = async (req, res) => {
  try {
    const { scoreName } = req.params;
    // console.log(scoreName);
    const Score = await Score.find({ name: scoreName });
    return res.status(200).json(Score);
  } catch {
    return res.status(500).json(error);
  }
};
module.exports = {
  getScore,
  getScoreById,
  postScore,
  putScore,
  deleteScore,
  getScoreByName
};
