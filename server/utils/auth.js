const jwt = require("jsonwebtoken");
require("dotenv").config();

class JWTHandler {
  static async createToken(user) {
    return jwt.sign(
      { id: user._id, username: user.username },
      process.env.SECRET_KEY,
      {
        expiresIn: "3h",
      }
    );
  }

  static async verifyToken(token) {
    try {
      return jwt.verify(token, process.env.SECRET_KEY);
    } catch (err) {
      return null;
    }
  }
}

module.exports = JWTHandler;
