const User = require("../models/User");
const bcryptUtil = require("../utils/bcrypt");
const auth = require("../utils/auth");
const Joi = require("joi");

class AuthController {
  static async login(req, res) {
    const { username, password } = req.body;

    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    if (!bcryptUtil.compareHash(user.password, password)) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const token = auth.createToken();

    res.json({ token });
  }

  static async signup(req, res) {
    const { username, password, email } = req.body;
  }
}

module.exports = AuthController;
