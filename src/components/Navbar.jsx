import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar max-w-[1142px] mx-auto flex justify-between h-full items-center ">
      <div>
        <Link>
          <span className="text-gray-200 text-3xl font-bold">SageSoul.</span>
        </Link>
      </div>
      <ul className="flex gap-x-5">
        <li className="cursor-pointer text-white">
          <Link to="/" className="text-xl">
            Home
          </Link>
        </li>
        <li className="cursor-pointer text-white">
          <a href="#features" className="text-xl">
            Features
          </a>
        </li>
        <li className="cursor-pointer text-white">
          <Link to="/" className="text-xl">
            About
          </Link>
        </li>
        <li className="cursor-pointer text-white">
          <Link to="/chat" className="text-xl">
            chat
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
