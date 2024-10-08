import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../../features/UserSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        email,
        password,
      });

      let { message } = response.data;

      if (message === "Invalid credentials") {
        return toast.error(message);
      }

      if (message === "User login Successfully") {
        let { token } = response.data;

        Cookies.set("token", token);

        dispatch(addUserDetails({ token: token }));

        console.log("login request successful: ", response.data);

        toast.success("Login Successfull")

        return navigate("/");
      }
    } catch (err) {
      console.log("login failed", err);
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-green-700 flex flex-col items-center justify-center font-popins">
        {/* Heading tag */}
        <div className="my-7 lg:my-9 ">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl text-gray-200 font-extrabold shadow-2xl overflow-y-hidden">
            Login
          </h1>
        </div>
        {/* form */}
        <div>
          <form
            method="post"
            className="flex flex-col gap-2 bg-white  shadow-2xl rounded-md lg:rounded-lg py-8 px-[2rem] sm:px-[5rem] sm:py-[5rem] lg:py-8 lg:px-[8rem]"
            onSubmit={handleLogin}
          >
            {/* imput fields */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold text-lg">
                Email
              </label>
              <input
                type="email"
                className="border border-black rounded px-2 py-1"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Username"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-bold text-lg">
                Password
              </label>
              <input
                type="password"
                className="border border-black rounded px-2 py-1"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="py-1">
              <pre>
                <Link to={"/signup"} className="cursor-default">
                  not a user: <u className="font-bold cursor-pointer">Signup</u>
                </Link>
              </pre>
            </div>

            {/* login button */}
            <div>
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-600 text-white font-bold rounded-md border py-2 w-full"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
