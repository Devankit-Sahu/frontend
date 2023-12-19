import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Vata", "Pitta", "Kapha"];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Bar chart showing vata, pitta,kapha dosha",

    },
  },
};
const data = {
  labels,
  datasets: [
    {
      label: "Doshas chart",
      data: [2, -3, 4],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      barThickness: 29,
    },
  ],
};

const Barchart = () => {
  return <Bar data={data} options={options} />;
};

export default Barchart;
