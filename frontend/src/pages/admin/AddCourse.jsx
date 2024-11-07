import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { fetchData } from "../../features/CoursesSlice";

const AddCourse = () => {
  let [courseName, setCourseName] = useState("");
  let [coursePrice, setCoursePrice] = useState("");
  let [courseDescription, setCourseDescription] = useState("");
  let [courseContent, setCourseContent] = useState("");
  let [courseDuration, setCourseDuraton] = useState("");
  let [thumbnail, setThumbnail] = useState(null);

  let dispatch = useDispatch();

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${Cookies.get("token")}`,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("courseDescription", courseDescription);
    formData.append("courseContent", courseContent);
    formData.append("coursePrice", coursePrice);
    formData.append("courseDuration", courseDuration);
    formData.append("image", thumbnail);

    try {
      const res = await axios.post(
        "http://localhost:4000/Courses/addCourse",
        formData,
        { headers }
      );

      dispatch(fetchData());

      alert("Course Created Successfully");

      setCourseName("");
      setCoursePrice("");
      setCourseDescription("");
      setCourseContent("");
      setCourseDuraton("");
      setThumbnail(null);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-green-700 flex flex-col justify-center items-center gap-10 p-5">
      <h1 className="text-3xl font-bold text-white overflow-hidden mt-[10vh]">
        Add New Course
      </h1>
      <form
        className="max-w-lg w-full bg-white rounded-lg shadow-md p-8 mb-5"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="courseName"
            className="block text-gray-700 font-bold mb-2"
          >
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500"
            placeholder="Enter course name"
            onChange={(e) => {
              setCourseName(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="thumbnail"
            className="block text-gray-700 font-bold mb-2"
          >
            Add thumbnail
          </label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500"
            onChange={(e) => {
              setThumbnail(e.target.files[0]);
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="courseDescription"
            className="block text-gray-700 font-bold mb-2"
          >
            Course Description
          </label>
          <textarea
            id="courseDescription"
            name="courseDescription"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500"
            placeholder="Enter course description"
            rows="4"
            onChange={(e) => {
              setCourseDescription(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="courseContent"
            className="block text-gray-700 font-bold mb-2"
          >
            Course Content
          </label>
          <textarea
            id="courseContent"
            name="courseContent"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500"
            placeholder="Enter course content"
            rows="6"
            onChange={(e) => {
              setCourseContent(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="coursePrice"
            className="block text-gray-700 font-bold mb-2"
          >
            Course Price (₹)
          </label>
          <input
            type="number"
            id="coursePrice"
            name="coursePrice"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500"
            placeholder="Enter course price"
            onChange={(e) => {
              setCoursePrice(Number(e.target.value));
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="courseDuration"
            className="block text-gray-700 font-bold mb-2"
          >
            Course Duration
          </label>
          <input
            type="text"
            id="courseDuration"
            name="courseDuration"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500"
            placeholder="Enter course duration"
            onChange={(e) => {
              setCourseDuraton(e.target.value);
            }}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
