const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./config/db.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

// connection with database

// variables
const PORT = process.env.PORT || 4000;
const app = express();

// connecting database
db();

// middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Testing route
app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

// getting razorpay key
app.get("/api/getKey", (req, res) => {
  res.status(200).json({ key: process.env.RPAY_API_KEY });
});

// routes
app.use("/user", require("./routes/user"));
app.use("/Courses", require("./routes/course"));
app.use("/buyCourse", require("./routes/order"));

// listening to the server
app.listen(PORT, () => {
  console.log("Server Started at", PORT);
});
