const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  courseName: {
    type: String,
    require: true,
  },
  courseThumbnail: {
    public_id: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
  courseDescription: {
    type: String,
    require: true,
  },
  courseContent: {
    type: String,
    require: true,
  },
  coursePrice: {
    type: Number,
    require: true,
  },
  courseDuration: {
    type: String,
    require: true,
  },
});

const Courses = mongoose.model("Courses", courseSchema);
module.exports = Courses;
