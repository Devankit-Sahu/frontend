import React from "react";

const Chat = () => {
  return (
    <div className="h-screen bg-red-300 chat py-[1rem] ">
      <div className="max-w-[1142px] mx-auto h-[80vh] bg-[#ffffff38] rounded-2xl overflow-hidden relative left-1/2 top-[55%] -translate-x-[67%] -translate-y-1/2">
        <div className="content h-[70vh]"></div>
        <div className="content h-[10vh] bg-gray-300 flex items-center px-10">
          <input type="text" className="w-[90%] outline-none bg-transparent " />
          <button className="px-5 py-3 bg-gradient-to-r from-[#5603dd] via-purple-500 to-[#ff5de4] rounded-lg font-bold">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
