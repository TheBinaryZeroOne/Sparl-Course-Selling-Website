import React from "react";
import { Link } from "react-router-dom";
import { SiSparkar } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="bg-white font-popins text-green-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="flex items-center text-2xl font-bold"><SiSparkar />park</h2>
              <p className="mt-2">Your destination for online courses</p>
            </div>
            <ul className="flex gap-4">
              <li>
                <Link to="" className="hover:text-green-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="courses" className="hover:text-green-800">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="" className="hover:text-green-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Spark. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
