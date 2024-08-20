const express = require("express");
const {
  getUser,
  addUser,
  loginUser,
  updatePassword,
  forgetPassword,
  getUserCourses,
} = require("../controllers/user");

const router = express.Router();

router.get("/", getUser);
router.get("/getOwendCourses/:id", getUserCourses);
router.post("/signup", addUser);
router.post("/login", loginUser);
router.put("/updatePassword/:id", updatePassword);
router.put("/forgetPassword", forgetPassword);

module.exports = router;
