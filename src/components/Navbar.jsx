import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="navbar max-w-[1242px] mx-auto flex justify-between h-full items-center ">
      <div>
        <Link>
          <span className="text-gray-200 text-3xl font-bold logo-name tracking-[0.6px]">
            SageSoul
          </span>
        </Link>
      </div>
      <ul className="flex items-center justify-between gap-x-5">
        <li className="cursor-pointer text-white">
          <Link to="/" className="text-xl">
            Home
          </Link>
        </li>
        <li className="cursor-pointer text-white">
          <a href="/" className="text-xl">
            Features
          </a>
        </li>
        <li className="cursor-pointer text-white">
          <Link to="/" className="text-xl">
            About
          </Link>
        </li>
        <li className="cursor-pointer text-white ">
          <Link to="/chat" className="text-xl">
            chat
          </Link>
        </li>
        <li className="cursor-pointer text-white">
          <Link to="/" className="text-xl">
            <VscAccount />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
