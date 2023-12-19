import React, { useRef } from "react";
import BarChart from "./BarChart";
import CircularGraph from "./CircularGraph";
const Dashboard = () => {
  return (
    <div className="dashboard mt-10">
      <div className="my-10 grid grid-cols-2 gap-10">
        <div className="w-[500px]">
          <BarChart />
        </div>
        <div className="w-[500px] flex flex-col items-center justify-center">
          <h2 className="text-gray-700 font-semibold mb-2">
            Network graph showing medicine suggested for disease
          </h2>
          <CircularGraph />
          {/* <BarChart /> */}
        </div>
      </div>
      <div>new</div>
    </div>
  );
};

export default Dashboard;
