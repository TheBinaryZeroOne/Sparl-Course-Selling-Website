const express = require("express");
const isAdmin = require("../middleware/auth");
const {
  addCourse,
  deleteCourse,
  getCourses,
  searchCourse,
} = require("../controllers/course");
const upload = require("../middleware/multer");
const router = express.Router();

router.get("/", getCourses);
router.get("/searchCourse/:id", searchCourse);
router.post("/addCourse", isAdmin, upload.single("image"), addCourse);
router.delete("/deleteCourse/:id", isAdmin, deleteCourse);

module.exports = router;
