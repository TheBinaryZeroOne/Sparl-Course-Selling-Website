import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCourse } from "../features/CoursesSlice";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { fetchOwnedCourses } from "../features/CoursesOwned";
import { toast } from "react-toastify";

const ContentPage = () => {
  let dispatch = useDispatch();
  let course = useSelector((state) => state.Courses.searchCourse);
  let user = useSelector((state) => state.User);

  let navigate = useNavigate();

  let token = Cookies.get("token");

  const { courseID } = useParams();

  const userID = useSelector((state) => state.User.userID);
  const couseOwned = useSelector((state) => state.CoursesOwned.data);

  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:4000/api/getKey");

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/buyCourse/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Spark.com",
      description: "Purchasing Course",
      image: "https://example.com/your_logo",
      order_id: order.id,
      callback_url: `http://localhost:4000/buyCourse/paymentVerification?userId=${userID}&totlaAmt=${amount}&courseId=${course?.data?._id}`,
      prefill: {
        name: user.username,
        email: user.email,
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();

    console.log(key);
  };

  let [coursesOwn, setCourseOwn] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(searchCourse(courseID));
    } else {
      toast.error("user not logged in");
      navigate("/login");
    }
  }, [couseOwned, courseID]);

  useEffect(() => {
    // Fetch owned courses only when userID changes
    if (userID) {
      dispatch(fetchOwnedCourses(userID));
    }
  }, [dispatch, userID]);

  // useEffect(() => {
  //   if (couseOwned && couseOwned.includes(courseID)) {
  //     setCourseOwn(true);
  //   }
  // }, [couseOwned, courseID]);

  // const isCourseOwned = couseOwned && couseOwned.includes(courseID);

  return (
    <>
      <div className="flex flex-col min-h-[100vh] pt-[15vh] gap-10 px-[10vw] py-5">
        {/* heading */}
        <div>
          <h1 className="text-3xl font-bold font-popins overflow-hidden">
            {course?.data?.courseName}
          </h1>
        </div>
        {/* image and des */}
        <div className="flex flex-col-reverse gap-10 md:gap-0 md:flex-row w-full justify-between">
          <div className="w-w-full md:w-[45%]">
            <p className="font-popins">{course?.data?.courseDescription}</p>
          </div>
          <div className=" w-full md:w-[45%]">
            <img src={course?.data?.courseThumbnail.url} alt="no-thumbnail" />
          </div>
        </div>
        {/* course Content */}
        <div>
          <p className="font-popins">{course?.data?.courseContent}</p>
        </div>
        {/* Course Duration */}
        <div>
          <p className="font-popins font-bold">
            Course Duration : {course?.data?.courseDuration}
          </p>
        </div>
        {/* Price and button */}
        <div className="flex flex-col gap-3">
          <p className="font-popins font-semibold">
            Price: ₹ {course?.data?.coursePrice}
          </p>
          <button
            onClick={() => {
              checkoutHandler(course?.data?.coursePrice);
            }}
            className="text-white bg-green-700 font-popins font-bold rounded-md px-5 py-2 w-fit hover:bg-green-600"
          >
            Buy Now
          </button>
          {/* {isCourseOwned && <span className="font-bold">Course Owned</span>} */}
        </div>
      </div>
    </>
  );
};

export default ContentPage;
