import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import Card from "./Card";
import axios from "axios";
const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState([]);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (message !== "") {
      // const {data} = await axios.post("",{})
      console.log(message);
    }
  };
  return (
    <div className="chat py-[10rem] min-h-screen">
      <div className="max-w-[1142px] mx-auto ">
        <form
          onSubmit={submitHandler}
          className="content h-[10vh] flex items-center bg-[#ffffff38] rounded-2xl overflow-hidden"
        >
          <input
            type="text"
            placeholder="Ask about your disease..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-[95%] fonnt-[400] pl-10 pr-10 outline-none bg-transparent placeholder:text-black placeholder:text-xl placeholder:font-semibold"
          />
          <button className="mr-4 px-5 py-3 bg-gradient-to-r from-[#5603dd] via-purple-500 to-[#ff5de4] rounded-lg font-bold">
            <IoSend />
          </button>
        </form>
        {/* {response &&
          response.map((res, index) => (
          ))} */}
        <div className="mt-10">
          <h3 className="text-2xl text-white text-center">Top 5 results : </h3>
          <div className="flex justify-center flex-wrap gap-8 mt-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
