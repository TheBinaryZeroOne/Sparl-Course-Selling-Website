const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    console.log("Connected With Mongo");
  } catch (err) {
    console.log("Mongo Db Connection Error:-", err);
    process.exit(1);
  }
};

module.exports = db;
