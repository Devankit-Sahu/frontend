import React, { useState } from "react";

const Card = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={`relative w-[300px] bg-[#f0fff066] rounded-md px-5 py-10 cursor-pointer hover:-translate-y-1 ${
        isExpanded ? "h-auto" : "h-[190px]"
      }`}
    >
      <h4 className="absolute top-0 left-0 bg-[#ee82ee94] rounded-md px-2 py-1 font-semibold">
        chakra samhita
      </h4>
      <p
        className={`text-center overflow-hidden ${
          isExpanded ? "h-auto" : "h-20"
        }`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        minus nostrum neque doloremque excepturi, eaque voluptate assumenda
        officiis voluptatibus quisquam.
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
