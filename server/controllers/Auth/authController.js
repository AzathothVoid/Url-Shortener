const userModel = require("../../models/User");
const bcryptUtil = require("../../utils/bcrypt");
const auth = require("../../utils/auth");
const Joi = require("../../utils/validators/userSchema");
const RegisterUser = require("../../services/auth/registerService");

class AuthController {
  static async login(req, res) {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username: username });

    if (!user) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    if (!bcryptUtil.compareHash(user.password, password)) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    const token = auth.createToken();

    console.log("DONE");
    console.log("Token: " + token);

    res.json({ token });
  }

  static async signup(req, res, next) {
    const { username, password, email } = req.body;

    const user = {
      username: username,
      email: email,
      password: password,
    };

    const userSchema = Joi.getUserSchema();

    const { error, value } = userSchema.validate(user);

    if (error) {
      console.log(error);
      return res.status(400);
    }

    try {
      const newUser = await RegisterUser(user, userModel);

      res.json({ message: "User Registration Successful" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
