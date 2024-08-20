import React from "react";
import { Link } from "react-router-dom";

const Card = ({ description, price, name, duration, url, id }) => {
  return (
    <>
      <Link
        className="max-w-md mx-auto font-popins rounded overflow-hidden shadow-lg p-6 bg-white transform transition duration-300 hover:scale-105"
        to={`/courses/${id}`}
      >
        <div className="overflow-hidden">
          <img className="w-full h-auto" src={url} alt={name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <p className="text-gray-700 text-base">Price: {price}</p>
            <p className="text-gray-700 text-base">Duration: {duration}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
