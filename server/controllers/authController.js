const User = require("../models/User");
const bcryptUtil = require("../utils/bcrypt");
const auth = require("../utils/auth");
const Joi = require("../utils/validators/userSchema");

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

    const user = {
      username: username,
      email: email,
      password: password,
    };

    const userSchema = Joi.getUserSchema();

    const { error, value } = userSchema.validate(user);

    if (error) {
      return res.status(400).error(error);
    } else {
      console.log("Data is verified");
    }
  }
}

module.exports = AuthController;
