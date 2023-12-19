import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Card from "./Card";
import axios from "axios";
import Dashboard from "./Dashboard";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState([]);
  const [userChoice, setUserChoice] = useState("queries");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (message !== "") {
      // const {data} = await axios.post("",{})
      console.log(message);
    }
  };

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
  };

  return (
    <div className="chat-section">
      <div className="chat-bg"></div>
      <div className="bg-[#eff2f1] py-[8rem] h-full min-h-[88vh]">
        <div className="max-w-[1142px] mx-auto flex flex-col">
          <div className="flex items-center gap-x-1">
            <button
              onClick={() => handleUserChoice("chat")}
              className={`border px-3 py-3 rounded-t-xl ${
                userChoice === "chat"
                  ? " border-gray-300 bg-[#ffffff73]"
                  : " bg-[#e5e5e512]"
              }  hover:bg-[#ffffff73] capitalize`}
            >
              chat with AI
            </button>
            <button
              onClick={() => handleUserChoice("queries")}
              className={`border px-3 py-3 rounded-t-xl ${
                userChoice === "queries"
                  ? " border-gray-300 bg-[#ffffff73]"
                  : " bg-[#e5e5e512]"
              } hover:bg-[#ffffff73 capitalize`}
            >
              ask queries related to your health issues
            </button>
          </div>
          <form
            onSubmit={submitHandler}
            className="content h-[10vh] flex items-center bg-[#ffffff73] border border-gray-300 rounded-bl-[50px] rounded-br-[50px] rounded-tr-[50px] overflow-hidden"
          >
            <CiSearch className="text-[24px] mx-4" />
            <input
              type="text"
              placeholder="Ask about your disease..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-[95%] fonnt-[400] pl-5 pr-10 outline-none bg-transparent placeholder:text-gray-500 "
            />
            <button className="mr-4 px-5 py-3 bg-gradient-to-r from-[#5603dd] via-purple-500 to-[#ff5de4] text-white rounded-lg font-bold">
              <IoSend />
            </button>
          </form>
          <div className="mt-5 px-4">
            <p>Try asking or searching for : </p>
            <div className="flex flex-col">
              <p className="flex items-center gap-2 text-[17px] text-[rgb(37,142,178)] hover:underline cursor-pointer">
                <CiSearch className="text-black" />
                <span>How to treat Headace?</span>
              </p>
              <p className="flex items-center gap-2 text-[17px] text-[rgb(37,142,178)] hover:underline cursor-pointer">
                <CiSearch className="text-black" />
                <span>How to treat Headace?</span>
              </p>
              <p className="flex items-center gap-2 text-[17px] text-[rgb(37,142,178)] hover:underline cursor-pointer">
                <CiSearch className="text-black" />
                <span>How to treat Headace?</span>
              </p>
              <p className="flex items-center gap-2 text-[17px] text-[rgb(37,142,178)] hover:underline cursor-pointer">
                <CiSearch className="text-black" />
                <span>How to treat Headace?</span>
              </p>
            </div>
          </div>
          {/* {response &&
          response.map((res, index) => (
          ))} */}
          {userChoice === "chat" ? (
            <div className="mt-10">
              <h3 className="text-2xl text-black text-center">
                Top 5 results :{" "}
              </h3>
              <div className="flex justify-center flex-wrap gap-8 mt-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          ) : (
            <Dashboard />
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
