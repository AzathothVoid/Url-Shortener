const mongoClient = require("mongoose");

const usernameCharacterSet = /^[a-zA-Z0-9._-]+$/;
const emailCharacterSet =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userSchema = new mongoClient.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 25,
    match: usernameCharacterSet,
  },
  password: { type: String, required: true, minlength: 7 },
  email: { type: String, required: true, match: emailCharacterSet },
});


module.exports = mongoClient.model("User", userSchema);
