const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/spark");

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error Connecting with Mongo");
});

db.once("open", () => {
  console.log("Connected With Mongo");
});

module.exports = db;
