import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoLogOutSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchOwnedCourses } from "../../features/CoursesOwned";
import { logoutUser } from "../../features/UserSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { fetchData } from "../../features/CoursesSlice";
import Loader from "../../components/Loader";

const UserPanel = () => {
  const user = useSelector((state) => state.User);

  let coursesOwned = useSelector((state) => state.CoursesOwned.data);

  let courses = useSelector((state) => state.Courses.fetchCourses);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelLogout = () => {
    Cookies.remove("token");

    dispatch(logoutUser());

    navigate("/login");
  };

  const getOwnCourses = async () => {
    let userId = await user.userID;
    dispatch(fetchOwnedCourses(userId));
  };

  useEffect(() => {
    // dispatch(fetchOwnedCourses(user.userID));
    getOwnCourses();
    dispatch(fetchData());
  }, [user.userID]);

  return (
    <>
      {courses.status == "loading" ? (
        <Loader />
      ) : (
        <div className="min-h-[100vh] font-popins flex">
          <div className="w-[50vw] sm:w-[60vw] bg-gray-300 flex flex-col py-[5vh] px-[2vw] gap-2">
            {/* cOURSES OWNED */}
            <div>
              <h1 className="text-xl md:text-5xl text-black pt-[9vh] overflow-hidden font-bold">
                Courses Owned
              </h1>
            </div>
            {/* coursesOwned */}
            <div className="flex flex-wrap gap-[2vw] px-[5vw] my-[5%] overflow-hidden">
              {coursesOwned && coursesOwned.length > 0 ? (
                // If coursesOwned is not empty
                coursesOwned.map((i) => (
                  <Link
                    key={i._id}
                    className=" md:w-[40%] font-popins rounded overflow-hidden shadow-lg p-6 bg-white transform transition duration-300 hover:scale-105"
                    to={`/courses/${i._id}`}
                  >
                    <div>
                      <img
                        className="w-full h-auto"
                        src={i.courseThumbnail.url}
                        alt="thumbnail"
                      />
                      <div className="md:px-6 py-4">
                        <div className="md:font-bold md:text-xl md:mb-2 truncate">
                          {i.courseName}
                        </div>
                        <p className="hidden md:block text-gray-700 text-base truncate">
                          {i.courseDescription}
                        </p>
                      </div>
                      <div className=" hidden md:blockpx-6 pt-4 pb-2">
                        <p className="text-gray-700 text-base">
                          Duration: {i.courseDuration}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                // If coursesOwned is empty
                <>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-xl md:text-4xl font-bold overflow-hidden">
                      No Courses Owned
                    </h1>
                    <Link
                      to={"/courses"}
                      className="text-sm md:text-2xl font-bold overflow-hidden hover:text-blue-700"
                    >
                      <u>Click here to Buy Courses</u>
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* recommended courses */}
            <div>
              <h1 className="text-xl md:text-5xl text-black pt-[1vh] overflow-hidden font-bold">
                Recommended Courses
              </h1>
            </div>

            <div className=" pt-[3vh] md:pt-[5vh]">
              <Swiper
                spaceBetween={15}
                slidesPerView={1}
                loop={true}
                breakpoints={{
                  // When window width is <= 768px
                  768: {
                    slidesPerView: 1,
                  },
                  // When window width is <= 1024px
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {courses?.data?.map((i) => {
                  return (
                    <SwiperSlide key={i._id}>
                      <Link
                        to={`/courses/${i._id}`}
                        className="px-5 py-3 flex flex-col justify-between bg-white"
                      >
                        <div>
                          <img src={i?.courseThumbnail?.url} alt="" />
                        </div>
                        <div>
                          <h3 className="truncate">{i?.courseName}</h3>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="w-[50vw] sm:w-[40vw] bg-green-700 flex items-center justify-center flex-col">
            {/* user image */}
            <div className="w-full flex justify-center">
              <BiSolidUserCircle className="text-gray-300" size={"18rem"} />
            </div>

            {/* user details */}
            <div className="text-white font-popins font-bold flex flex-col gap-4 text-center">
              <div c>
                <h3>Username</h3>
                <p>{user.username}</p>
              </div>
              <div>
                <h3>Email</h3>
                <p>{user.email}</p>
              </div>
              {/* change password */}
              <div className="mt-5">
                <h3 className="px-2 text-sm sm:text-xl">
                  If you want to change your password then,{" "}
                </h3>
                <Link to="/user/changepassword">
                  <button className="bg-white text-green-700 px-2 py-2 sm:px-3 sm:py-3 rounded-md mt-3 transition duration-300 ease-in-out hover:bg-green-700 hover:text-white hover:border-2 border-white">
                    Click Here
                  </button>
                </Link>
              </div>
              {user.role == "admin" ? (
                <>
                  <div className="mt-5">
                    <h3 className="px-2 text-sm sm:text-xl">
                      welcome Admin!..
                    </h3>
                    <Link to={"/user/admin"}>
                      <button className="bg-white text-green-700 px-2 py-2 sm:px-3 sm:py-3 rounded-md mt-3 transition duration-300 ease-in-out hover:bg-green-700 hover:text-white hover:border-2 border-white">
                        Admin Panel
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="mt-5">
              <button
                onClick={handelLogout}
                className="bg-red-700 text-white px-2 py-2 sm:px-3 sm:py-2 font-bold rounded-md mt-3 transition duration-300 ease-in-out hover:bg-white hover:text-red-700 flex justify-center items-center gap-2"
              >
                <IoLogOutSharp /> Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPanel;
