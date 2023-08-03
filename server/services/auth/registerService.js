const bcrypt = require("../../utils/bcrypt");

const RegisterUser = async (user, userModel) => {
  const { username, email, password } = user;

  const newUser = new userModel({
    username: username,
    email: email,
    password: password,
  });

  if (!username || !email || !password) {
    throw { error: "Invalid Credentials", status: 400 };
  }

  const existUser = userModel.aggregate([
    { $match: { $or: [{ email: email }] } },
  ]);

  if (existUser && existUser.length > 0) {
    throw { error: "User Already Exists", status: 400 };
  }

  const hashPass = await bcrypt.hashValue(password);

  if (!hashPass) {
    throw { error: "Password could not be hashed", status: 501 };
  }

  newUser.password = hashPass;

  const User = await newUser.save();

  console.log(User);

  return User;
};

module.exports = RegisterUser;
