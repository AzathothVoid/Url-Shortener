const mongoClient = require("mongoose");
require("dotenv").config();

class Connection {
  static async connect() {
    try {
      const res = await mongoClient.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.DB,
      });

      if (res) {
        console.log("Connection with Database established");
        return res;
      }
    } catch (err) {
      console.error(
        "Errors were encountered when connecting to database\n" + err
      );
      return null;
    }
  }
}

module.exports = Connection;
