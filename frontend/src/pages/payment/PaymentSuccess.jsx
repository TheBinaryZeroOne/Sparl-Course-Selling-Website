import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];

  const refrenceNum = searchQuery.get("reference");

  return (
    <>
      <div className="h-[100vh] bg-gray-300 flex flex-col gap-5 items-center justify-center font-popins">
        <h1 className="font-bold text-2xl">Payment Successfull!!</h1>
        <h2>Refrence No. {refrenceNum}</h2>
        <Link to={"/user"}>
          <button className="bg-green-700 text-white px-3 py-3 rounded-md hover:bg-green-600">
            Go to owned Courses
          </button>
        </Link>
      </div>
    </>
  );
};

export default PaymentSuccess;
