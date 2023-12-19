import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="max-w-[1142px] mx-auto flex items-center justify-center flex-col gap-y-6">
        <p className="text-center selection:bg-yellow-200 selection:text-black capitalize text-5xl text-white w-[600px] font-bold tracking-[1.2px]">
          Explore and Discover Ayurvedic Solutions.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 rounded-md bg-yellow-300 text-gray-700 cursor-pointer font-bold "
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
