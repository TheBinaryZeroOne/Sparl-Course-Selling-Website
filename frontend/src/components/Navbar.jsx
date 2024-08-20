import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../features/UserSlice";
import { FaUserAlt } from "react-icons/fa";
import { SiSparkar } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let dispatch = useDispatch();

  let user = useSelector((state) => state.User);

  console.log(user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let token = Cookies.get("token");
    if (token) {
      dispatch(addUserDetails({ token: token }));
    }
  }, []);

  return (
    <nav className="bg-white font-popins shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 overflow-hidden">
            <NavLink
              to=""
              className="flex items-center text-green-700 text-3xl font-bold overflow-y-hidden"
            >
              <SiSparkar />
              park
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to=""
                className="text-green-700 hover:bg-green-100 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="courses"
                className="text-green-700 hover:bg-green-100 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Courses
              </NavLink>
              <NavLink
                to="/about"
                className="text-green-700 hover:bg-green-100 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-green-700 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {user.username === "" ? (
            <div className="hidden md:flex items-center space-x-4">
              <NavLink
                to={"login"}
                className="text-green-700 hover:bg-green-100 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </NavLink>
              <NavLink
                to={"signup"}
                className="text-green-700 hover:bg-green-100 hover:text-green-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Signup
              </NavLink>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <NavLink
                to={"user"}
                className="flex items-center gap-2 text-white bg-green-700 px-4 py-2 font-bold rounded-md"
              >
                <FaUserAlt />
                {user.username}
              </NavLink>
            </div>
          )}
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to=""
            className="text-green-700 hover:bg-green-100 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to="courses"
            className="text-green-700 hover:bg-green-100 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Courses
          </NavLink>
          <NavLink
            to="/about"
            className="text-green-700 hover:bg-green-100 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </NavLink>
          {user.username === "" ? (
            <>
              <NavLink
                to="login"
                className="text-green-700 hover:bg-green-100 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </NavLink>
              <NavLink
                to="signup"
                className="text-green-700 hover:bg-green-100 hover:text-green-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Signup
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to={"user"}
                className="text-green-700 hover:bg-green-100 hover:text-green-900 flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium"
              >
                <FaUserAlt />
                {user.username}
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
