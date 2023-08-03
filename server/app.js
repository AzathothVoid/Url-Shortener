const express = require("express");
const mongoClient = require("./utils/connection");
require("dotenv").config();

const port = process.env.PORT || 8080;
const app = express();

//import route
routes = require("./routes/index.js");

//defining default middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connecting to database
mongoClient.connect().then((res) => {
  if (!res) {
    return console.error("Could not connect to database");
  }
  console.log("Connected to database");
});

//Implementing routes
app.use("/api", routes);

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
