const { verifyToken } = require("../utils/jwt");

const isAuthProfile = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) {
      return res.status(400).json({ message: "you do not have permissions" });
    }
    const token = auth.split(" ")[1];
    const tokenVerified = verifyToken(token);
    //   console.log(tokenVerified);
    if (!tokenVerified.id) {
      return res
        .status(400)
        .json({ message: "you do not have permissions", message: tokenVerified });
    }
    //   const userProfile = await User.findById(tokenVerified.id);

    req.userProfile = tokenVerified.id;
    console.log(req.userProfile);

    next();
  } catch (error) {
    return res.status(500).json(error)
  }
};

module.exports = { isAuthProfile };
