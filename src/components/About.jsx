import React from "react";
import { CiSearch } from "react-icons/ci";

const About = () => {
  return (
    <div className="explore-section py-[7rem]">
      <div className="section-overlay"></div>
      <div className="explore-wrapper">
        <div className="max-w-[1142px] mx-auto">
          <h2 className="mb-4 text-center text-[46px] font-[700] text-white relative z-10">
            How does it work?
          </h2>
          <div className="">
            <ul className="relative list-none">
              <div className="w-[8px] h-[82%] bg-[#13547a] absolute left-[52px] top-0 overflow-hidden">
                <div className="absolute right-0 bottom-0 h-[420.2px] bg-[#80d0c7] w-full"></div>
              </div>
              <li className="relative pt-[20px] pb-[65px] pl-[125px] before:content-none before:absolute before:w-[8px] before:h-full before:bg-transparent before:left-[52px] before:z-0">
                <h4 className="text-white text-[28px] font-semibold">
                  {" "}
                  Search your diseases
                </h4>
                <p className="text-white text-[20px] leading-[40px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  iure quaerat, quam ab fugiat quasi alias quisquam consequuntur
                  dolorem accusamus!
                </p>
                {/* <div className="absolute left-0 top-0 w-[104px] h-[104px] flex justify-center items-center bg-[#80d0c7] rounded-[50%] z-[1] transition-all duration-[.4] before:content-none before:w-[80px] before:h-[80px] before:absolute before:border-4 before:border-solid before:border-white before:rounded-[50%] before:z-[-1] before:transition-all before:duration-[.4]"></div> */}
                <div className="icon-holder">
                  <CiSearch color="white" size="25px" />
                </div>
              </li>
              <li className="relative pt-[20px] pb-[65px] pl-[125px] before:content-none before:absolute before:w-[8px] before:h-full before:bg-transparent before:left-[52px] before:z-0">
                <h4 className="text-white text-[28px] font-semibold">
                  {" "}
                  Search your diseases
                </h4>
                <p className="text-white text-[20px] leading-[40px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  iure quaerat, quam ab fugiat quasi alias quisquam consequuntur
                  dolorem accusamus!
                </p>
                {/* <div className="absolute left-0 top-0 w-[104px] h-[104px] flex justify-center items-center bg-[#80d0c7] rounded-[50%] z-[1] transition-all duration-[.4] before:content-none before:w-[80px] before:h-[80px] before:absolute before:border-4 before:border-solid before:border-white before:rounded-[50%] before:z-[-1] before:transition-all before:duration-[.4]"></div> */}
                <div className="icon-holder">
                  <CiSearch color="white" size="25px" />
                </div>
              </li>
              <li className="relative pt-[20px] pb-[65px] pl-[125px] before:content-none before:absolute before:w-[8px] before:h-full before:bg-transparent before:left-[52px] before:z-0">
                <h4 className="text-white text-[28px] font-semibold">
                  {" "}
                  Search your diseases
                </h4>
                <p className="text-white text-[20px] leading-[40px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  iure quaerat, quam ab fugiat quasi alias quisquam consequuntur
                  dolorem accusamus!
                </p>
                {/* <div className="absolute left-0 top-0 w-[104px] h-[104px] flex justify-center items-center bg-[#80d0c7] rounded-[50%] z-[1] transition-all duration-[.4] before:content-none before:w-[80px] before:h-[80px] before:absolute before:border-4 before:border-solid before:border-white before:rounded-[50%] before:z-[-1] before:transition-all before:duration-[.4]"></div> */}
                <div className="icon-holder">
                  <CiSearch color="white" size="25px" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
