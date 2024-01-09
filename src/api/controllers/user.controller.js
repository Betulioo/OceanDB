const User = require("../models/user.model");
const { validateEmailDB, validatePassword } = require("../../utils/validator");
const bycrypt = require("bcrypt");
const { generateToken } = require("../../utils/jwt");

const getUser = async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const {id} = req.params;
    console.log(id);
    const user = await User.findById(id);
       return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);

  }
};

const register = async (req, res) => {
  try {
    const userBody = new User(req.body);
    const valEmail = await validateEmailDB(req.body.email);
    if (!valEmail) {
      if (validatePassword(req.body.password)) {
        userBody.password = bycrypt.hashSync(userBody.password, 10);
        const createduser = await userBody.save();
        return res.json({ success: true, message: "Succes", data: createduser });
      } else {
        return res.json({
          success: false,
          message: "Password does not match the pattern",
        });
      }
    }
    return res.json({ success: false, message: "Email already exists" });
  } catch (error) {
    return res.status(500).json(error);

  }
};
const login = async (req, res) => {
  try {
    const userInfo = req.body;
    const userDB = await validateEmailDB(userInfo.email);
    if (!userDB) {
      return res.json({ success: false, message: "Email does not exist" });
    }
    if (!bycrypt.compareSync(userInfo.password, userDB.password)) {
      return res.json({ success: false, message: "Password does not match" });
    }

    const token = generateToken(userDB._id, userDB.email);
    return res.json({
      success: true,
      message: "Log in successfully completed",
      token: token,
      userInfo: userDB,
    });
  } catch (error) {
    return res.status(500).json(error);

  }
};
const profile = async (req, res) => {
  try {
    return res.status(200).json(req.userProfile);
  } catch (error) {
    return res.status(500).json(error);

  }
};

module.exports = { register, login, profile, getUser, getUserById };
