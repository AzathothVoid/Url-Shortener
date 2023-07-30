const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;











const listener = app
  .listen(port, (res) => {
    if (res) {
      console.log(`Server Listening on port ${port}`);
    }
  })
  .on("error", (error) => {
    if (error) {
      console.log(error);
    }
  });
