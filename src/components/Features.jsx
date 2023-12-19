import React from "react";
import img from "../assets/3.jpg";
import svg from "../assets/truck.svg";
import { FaLeaf } from "react-icons/fa";
const Features = () => {
  return (
    <div
      className="ayruvedh-about relative -z-10 bg-[#eff2f1] py-[7rem]"
      id="features"
    >
      <div className="max-w-[1242px] mx-auto">
        <div className="grid grid-cols-2 gap-x-20">
          <div className="">
            <h1 className="capitalize text-3xl font-semibold mb-6">
              <span className="text-4xl text-blue-500">Our</span> features
            </h1>
            <p className="text-[#6a6a6a] mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              ipsa in asperiores consequuntur. Doloremque vero hic, quas nemo
              cupiditate labore.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div className="feature">
                {/* <img src={svg} alt="" /> */}
                <FaLeaf />
                <h3 className="text-[#2f2f2f] text-[14px] font-semibold leading-[1.2] mb-[.5]">
                  lorem ipsum
                </h3>
                <p className="text-[#6a6a6a] text-[14px] font-semibold leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, ipsum.
                </p>
              </div>
              <div className="feature">
                <FaLeaf />
                <h3 className="text-[#2f2f2f] text-[14px] font-semibold leading-[1.2] mb-[.5]">
                  lorem ipsum
                </h3>
                <p className="text-[#6a6a6a] text-[14px] font-semibold leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                  nam veritatis. Vitae, ab mollitia.
                </p>
              </div>
              <div className="feature">
                <FaLeaf />
                <h3 className="text-[#2f2f2f] text-[14px] font-semibold leading-[1.2] mb-[.5]">
                  lorem ipsum
                </h3>
                <p className="text-[#6a6a6a] text-[14px] font-semibold leading-[22px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque, possimus.
                </p>
              </div>
              <div className="feature">
                <FaLeaf />
                <h3 className="text-[#2f2f2f] text-[14px] font-semibold leading-[1.2] mb-[.5]">
                  lorem ipsum
                </h3>
                <p className="text-[#6a6a6a] text-[14px] font-semibold leading-[22px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="img-wrap w-[500px] h-[600px] ml-auto">
              <img
                src={img}
                className="h-full w-full object-cover rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
