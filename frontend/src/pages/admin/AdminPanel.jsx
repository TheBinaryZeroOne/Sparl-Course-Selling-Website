import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-green-700 flex flex-col justify-center items-center gap-[5vh]">
        <div>
          <h1 className="text-white font-bold text-[5rem] overflow-hidden">
            Options
          </h1>
        </div>
        <div className="flex gap-5">
          <div>
            <Link to={"/user/admin/addCourse"}>
              <button className="bg-white text-green-700 font-bold text-2xl rounded-md px-5 py-5">
                Add Course
              </button>
            </Link>
          </div>
          <div>
            <Link to={"/user/admin/deleteCourse"}>
              <button className="bg-white text-green-700 font-bold text-2xl rounded-md px-5 py-5">
                Delete Course
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
