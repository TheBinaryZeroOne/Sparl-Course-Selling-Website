import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/CoursesSlice";
import Card from "../../components/Card";
import Loader from "../../components/Loader";

const Courses = () => {
  let courses = useSelector((state) => state.Courses.fetchCourses);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      {courses.status == "loading" ? (
        <Loader />
      ) : (
        <div className="min-h-[100vh] bg-green-700 flex flex-col items-center">
          {/* heading */}
          <div className="mt-[5%]">
            <h1 className="text-white pt-[28%] text-[3rem] md:text-[8rem] md:pt-[1%] font-popins font-bold">
              Courses
            </h1>
          </div>

          {/* horizontal ray */}
          <div className="w-full bg-white h-[5px]"></div>

          {/* card */}
          <div className="flex flex-wrap gap-[5vw] px-[10vw] my-[5vw] overflow-hidden">
            {courses?.data?.map((i) => {
              return (
                <Card
                  key={i._id}
                  description={i.description}
                  name={i.courseName}
                  url={i.courseThumbnail.url}
                  duration={i.courseDuration}
                  price={i.coursePrice}
                  id={i._id}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
