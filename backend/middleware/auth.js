const jwt = require("jsonwebtoken");
const Usermodel = require("../model/User");

const protectedRoutes = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "User is Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.jwt_token);

    req.user = await Usermodel.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = { protectedRoutes };