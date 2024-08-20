import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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

        {/* About Content */}
        <div className="font-popins h-fit w-full flex flex-col gap-7 overflow-hidden">
          <h1 className="text-center text-5xl font-bold flex items-center overflow-hidden justify-center">
            About Us
          </h1>
          <p className="text-center px-2 md:px-0 text-xl">
            Welcome to Spark, your destination for online courses. Our mission
            is to ignite your learning journey by providing top-notch courses
            where knowledge meets opportunity.
          </p>
        </div>

        {/* Back to Home */}
        <div className="md:mt-[3vh] xl:mt-[5vh] flex flex-col justify-center items-center gap-[4vh]">
          <h1 className="flex text-xl md:text-4xl xl:text-5xl font-bold overflow-y-hidden">
            <span className="hidden xl:block overflow-y-hidden">
              Back to Home
            </span>{" "}
            &nbsp;
            <Link to={"/"} className="underline overflow-hidden">
              Go to Homepage
            </Link>
          </h1>
        </div>

        {/* for ending */}
        <div className="block">
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

export default About;
