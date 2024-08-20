const Courses = require("../model/Courses");
const { subscribe } = require("../routes/course");
const cloudinary = require("../utils/cloudinary");

const getCourses = async (req, res) => {
  try {
    const courses = await Courses.find();

    return res.json({ success: true, courses: courses });
  } catch (Err) {
    console.log("Something went wrong", Err);
  }
};

const searchCourse = async (req, res) => {
  try {
    let id = req.params.id;

    const course = await Courses.findById(id);

    if (!course) {
      res.json({ success: false, message: "course does not exist" });
    }

    res.json({ success: true, course });
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

const addCourse = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    // Extract public_id and url from the Cloudinary response
    const { public_id, url } = result;

    // Extract course details from request body
    const {
      courseName,
      courseDescription,
      courseContent,
      coursePrice,
      courseDuration,
    } = req.body;

    // Create a new course with the thumbnail details
    const newCourse = await Courses.create({
      courseName,
      courseDescription,
      courseThumbnail: { public_id, url },
      courseContent,
      coursePrice,
      courseDuration,
    });

    console.log(newCourse);

    return res.json({ success: true, message: "Course added successfully" });
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;

    const deletedCourse = await Courses.findByIdAndDelete(courseId);

    if (!deleteCourse) {
      return res.json({ success: false, message: "Course not found" });
    }

    const courses = await Courses.find();

    return res.json({
      success: true,
      message: "Course Deleted Successfully",
      courses,
    });
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

module.exports = { addCourse, deleteCourse, getCourses, searchCourse };
