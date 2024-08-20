import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ChangePass = () => {
  let [currPass, setCurrPass] = useState("");
  let [newPass, setNewPass] = useState("");
  let [confirmPass, setConfirmPass] = useState("");

  const navigate = useNavigate();

  const user = useSelector((state) => state.User);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:4000/user/updatePassword/${user.userID}`,
        {
          password: currPass,
          newPass,
          confirmPass,
        }
      );

      setCurrPass("");
      setNewPass("");
      setConfirmPass("");

      let { message } = res.data;

      if (message == "Incorrect Password") {
        toast.error(message);
      }

      if (message == "New Password and Confirm Password do not match") {
        toast.error("New Password and Confirm Password does not match");
      }

      if (message == "Password Updated Successfully") {
        toast.success(message);
        navigate("/");
      }
    } catch (error) {
      console.error("Error updating password", error);
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-green-700 flex flex-col items-center justify-center font-popins">
        {/* Heading tag */}
        <div className="my-7 lg:my-9 ">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl text-gray-200 font-extrabold shadow-2xl overflow-y-hidden">
            Change Password
          </h1>
        </div>
        {/* form */}
        <div>
          <form
            method="post"
            className="flex flex-col gap-2 bg-white  shadow-2xl rounded-md lg:rounded-lg py-8 px-[2rem] sm:px-[5rem] sm:py-[5rem] lg:py-8 lg:px-[8rem]"
            onSubmit={handleSubmit}
          >
            {/* imput fields */}
            <div className="flex flex-col">
              <label htmlFor="currentPass" className="font-bold text-lg">
                Current Password
              </label>
              <input
                type="password"
                className="border border-black rounded px-2 py-1"
                placeholder="Enter Current Password"
                value={currPass}
                onChange={(e) => {
                  setCurrPass(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="newPassword" className="font-bold text-lg">
                New Password
              </label>
              <input
                type="password"
                className="border border-black rounded px-2 py-1"
                placeholder="Enter New Password"
                value={newPass}
                onChange={(e) => {
                  setNewPass(e.target.value);
                }}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword" className="font-bold text-lg">
                Confirm Password
              </label>
              <input
                type="password"
                className="border border-black rounded px-2 py-1"
                placeholder="Confirm Password"
                value={confirmPass}
                onChange={(e) => {
                  setConfirmPass(e.target.value);
                }}
                required
              />
            </div>
            <div className="py-1">
              <pre>
                <Link to={"/"} className="cursor-default">
                  <u>Forget Password</u>
                </Link>
              </pre>
            </div>

            {/* login button */}
            <div>
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-600 text-white font-bold rounded-md border py-2 w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePass;
