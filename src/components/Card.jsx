import React, { useState } from "react";

const Card = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="w-[300px] bg-[#f0fff066] rounded-md p-5 cursor-pointer hover:scale-[.9]">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Rooted in Stillness: Unveiling the Power of Kapha Dosha
      </h2>
      <p
        className={`text-center hover:underline overflow-hidden ${
          isExpanded ? "h-auto" : "h-20"
        }`}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        minus nostrum neque doloremque excepturi, eaque voluptate assumenda
        officiis voluptatibus quisquam.
      </p>
      <button
        onClick={toggleExpansion}
        className="mt-2 text-blue-500 hover:underline focus:outline-none"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default Card;
