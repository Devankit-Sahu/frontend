import React, { useState } from "react";

const Card = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam minus nostrum neque doloremque excepturi, eaque voluptate assumenda officiis voluptatibus quisquam.";
  return (
    <div
      className={`relative w-[300px] bg-white rounded-md px-5 pt-10 pb-6 cursor-pointer hover:-translate-y-1 ${
        isExpanded ? "h-auto" : ""
      }`}
    >
      <h4 className="absolute top-0 left-0 text-[#05849bb4] rounded-md px-2 py-1 font-semibold">
        chakra samhita
      </h4>
      <p
        className={`text-center overflow-hidden ${
          isExpanded ? "h-auto" : "h-[4.8rem]"
        }`}
      >
        {text}
      </p>
      <button
        onClick={toggleExpansion}
        className="mt-2 text-white bg-gradient-to-r from-[#5603dd] via-purple-500 to-[#ff5de4] px-3 py-2 rounded-md"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default Card;
