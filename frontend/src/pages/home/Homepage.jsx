import React, { useRef, useState } from "react";
import { SiSparkar } from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  // using gsap

  // let [value, setValue] = useState(0);
  // const random = gsap.utils.random(-100, 500, 10);

  // const marqueRed = useRef();

  // useGSAP(() => {
  //   gsap.to("#frog", {
  //     x: value,
  //     duration: 0.5,
  //   });
  // }, [value]);

  return (
    <>
      <div className="min-h-[100vh] w-[100vw] bg-green-700 text-white overflow-y-hidden flex flex-col justify-between">
        {/* page-1 */}
        <div className="mt-[7vh] lg:mt-[2vh]">
          <svg
            className="block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffff"
              fill-opacity="1"
              d="M0,192L40,202.7C80,213,160,235,240,208C320,181,400,107,480,85.3C560,64,640,96,720,96C800,96,880,64,960,80C1040,96,1120,160,1200,170.7C1280,181,1360,139,1400,117.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="font-popins h-fit w-full flex flex-col gap-7 overflow-hidden">
          <h1 className="text-center text-5xl font-bold flex items-center overflow-hidden justify-center">
            <SiSparkar />
            park
          </h1>
          <p className="text-center px-2 md:px-0 text-xl">
            Ignite Your Learning Journey with Spark: Where Knowledge Meets
            Opportunity
          </p>
          <svg
            className="block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffff"
              fill-opacity="1"
              d="M0,192L40,202.7C80,213,160,235,240,208C320,181,400,107,480,85.3C560,64,640,96,720,96C800,96,880,64,960,80C1040,96,1120,160,1200,170.7C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>

          {/* marquee */}
          <div id="scroller">
            <div id="scroller-in-1">
              <h4 className="text-green-700 font-bold text-3xl md:text-5xl overflow-y-hidden">
                Your destination for online courses
              </h4>
            </div>
            <div id="scroller-in-1">
              <h4 className="text-green-700 font-bold text-3xl md:text-5xl overflow-y-hidden">
                Your destination for online courses
              </h4>
            </div>
            <div id="scroller-in-1">
              <h4 className="text-green-700 font-bold text-3xl md:text-5xl overflow-y-hidden">
                Your destination for online courses
              </h4>
            </div>
            <div id="scroller-in-1">
              <h4 className="text-green-700 font-bold text-3xl md:text-5xl overflow-y-hidden">
                Your destination for online courses
              </h4>
            </div>
          </div>
        </div>
        {/* mid section */}
        <div className="md:mt-[3vh] xl:mt-[5vh] flex flex-col justify-center items-center gap-[4vh]">
          <h1 className="flex text-xl md:text-4xl xl:text-5xl font-bold overflow-y-hidden">
            <span className="hidden xl:block overflow-y-hidden">
              Hurry Up!!
            </span>{" "}
            &nbsp;Buy Our Top Notch Courses Now!!
          </h1>
          <Link to={"/courses"}>
            <button className="md:text-2xl xl:text-3xl font-bold border boreder-white bg-white rounded-md text-green-700 px-5 py-2 md:px-5 md:py-3 hover:bg-green-700 hover:text-white transition duration-300">
              Try Now
            </button>
          </Link>
        </div>

        {/* for ending */}
        <div className="block">
          {/* <img
            id="frog"
            onClick={() => {
              setValue(random);
            }}
            className="h-20"
            src="/src/images/Frog-removebg-preview.png"
            alt="no-img"
          /> */}
          <svg
            className="block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 319"
          >
            <path
              fill="#ffff"
              fill-opacity="1"
              d="M0,192L40,202.7C80,213,160,235,240,208C320,181,400,107,480,85.3C560,64,640,96,720,96C800,96,880,64,960,80C1040,96,1120,160,1200,170.7C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Homepage;
