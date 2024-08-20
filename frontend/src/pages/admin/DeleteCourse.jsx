import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/CoursesSlice";

const DeleteCourse = () => {
  let courses = useSelector((state) => state.Courses.fetchCourses.data);
  let dispatch = useDispatch();

  const headers = {
    "Content-Type": "application/json",
    authorization: `Bearer ${Cookies.get("token")}`,
  };

  const handleDelete = async (courseID) => {
    try {
      let res = await axios.delete(
        `http://localhost:4000/Courses/deleteCourse/${courseID}`,
        { headers }
      );
      console.log(res.data);
      dispatch(fetchData());

      alert("course Deleted successfully");
    } catch (err) {
      console.log("something went wrong", err);
    }
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <div className="h-screen bg-green-700 flex flex-col justify-center items-center gap-5">
        <div>
          <h1 className="text-white text-[5rem] font-bold">Details</h1>
        </div>
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20">
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200 shadow-md">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Course ID
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Course Name
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Options
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses?.map((i) => {
                  return (
                    <tr key={i._id}>
                      <td className="px-6 text-center py-4 whitespace-nowrap">
                        {i._id}
                      </td>
                      <td className="px-6 text-center py-4 whitespace-nowrap">
                        {i.courseName}
                      </td>
                      <td className="px-6 text-center py-4 whitespace-nowrap">
                        <button
                          className="text-xl font-bold text-red-700"
                          onClick={() => {
                            handleDelete(i._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteCourse;
