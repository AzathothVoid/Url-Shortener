const Joi = require("joi");
const regex = require("./regex.json");

class userSchema {
  static getUserSchema() {
    const userSchema = Joi.object({
      username: Joi.string()
        .regex(new RegExp(regex.username))
        .required()
        .min(3)
        .max(25)
        .insensitive(),
      email: Joi.string().regex(new RegExp(regex.email)).required(),
      password: Joi.string().required().min(7),
    });

    return userSchema;
  }
}

module.exports = userSchema;
