const bcrypt = require("bcrypt");

class Bcrypt {
  static async hashValue(data) {
    if (typeof data != "string") return null;

    bcrypt
      .hash(data, this.#randomizer(12, 8))
      .then((hash) => {
        return hash;
      })
      .catch((err) => {
        console.error("Error Hashing value\n" + err);
        return null;
      });
  }

  static async compareHash(hash, value) {
    bcrypt
      .compare(value, hash)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.error("Error comparing hashed value\n" + err);
        return null;
      });
  }

  static #randomizer(max, min) {
    return Math.random() * (max - min) + min;
  }
}

module.exports = Bcrypt;
