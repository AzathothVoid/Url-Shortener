const bcrypt = require("../../utils/bcrypt");

const RegisterUser = async (req, userModel) => {
  const { username, email, password } = req.body;

  const newUser = new userModel({
    username: username,
    email: email,
    password: password,
  });

  console.log("Inside reigster Service");

  if (!username || !email || !password) {
    throw { error: "Invalid Credentials", status: 400 };
  }

  const existUser = userModel.aggregate([{ $match: { email: email } }]);

  console.log("Aggregation result: " + existUser);

  if (existUser && existUser.length > 0) {
    console.log("Throwing aggregation error");
    throw { error: "User Already Exists", status: 400 };
  }

  console.log("Password: " + password);

  const hashPass = await bcrypt.hashValue(password);

  console.log("Hashed Pass: " + hashPass);

  if (!hashPass) {
    console.log("Throwing Hashing error");
    console.log(hashPass);
    throw { error: "Password could not be hashed", status: 501 };
  }

  newUser.password = hashPass;

  console.log("New user: " + newUser);

  const User = await newUser.save();

  console.log(User);

  return User;
};

module.exports = RegisterUser;
