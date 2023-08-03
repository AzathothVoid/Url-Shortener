const userModel = require("../../models/User");

class UserController {
  static async getById(req, res) {}

  static async create(req, res) {}

  static async getAll(req, res) {
    if (!db) {
      return res
        .status(501)
        .json({ error: "Unable To Connect to the database" });
    }

    const users = userModel.find();

    console.log(users);

    res.send(users);
  }
}

module.exports = UserController;
