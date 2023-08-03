const bcrypt = require("bcrypt");

class Bcrypt {
  static async hashValue(data) {
    if (typeof data != "string") return null;

    const salt = await bcrypt.genSalt(this.#randomizer(12, 8));
    const hash = await bcrypt.hash(data, salt);
    return hash;
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
