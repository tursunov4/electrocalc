import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Linegraph.css"; // CSS faylni import qilamiz

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const [timeRange, setTimeRange] = useState("monthly"); // Dastlab oylikni tanlaymiz
  const [chartData, setChartData] = useState(getDataByRange("monthly")); // Dastlab oylik ma'lumot

  function getDataByRange(range) {
    if (range === "yearly") {
      return {
        labels: [
          "Yanvar",
          "Fevral",
          "Mart",
          "Aprel",
          "May",
          "Iyun",
          "Iyul",
          "Avgust",
          "Sentabr",
          "Oktabr",
          "Noyabr",
          "Dekabr",
        ],
        datasets: [
          {
            label: "Yillik Ma'lumotlar",
            data: [12, 19, 3, 5, 2, 3, 9, 10, 12, 14, 16, 18],
            borderColor: "#00e3ff",
            borderWidth: 2,
            pointBackgroundColor: "#ff6600",
          },
        ],
      };
    } else if (range === "monthly") {
      return {
        labels: Array.from({ length: 31 }, (_, i) => `Kun ${i + 1}`),
        datasets: [
          {
            label: "Oylik Ma'lumotlar",
            data: Array.from({ length: 31 }, () =>
              Math.floor(Math.random() * 20)
            ),
            borderColor: "#00e3ff",
            borderWidth: 2,
            pointBackgroundColor: "#ff6600",
          },
        ],
      };
    } else if (range === "daily") {
      return {
        labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
        datasets: [
          {
            label: "Kunlik Ma'lumotlar",
            data: Array.from({ length: 24 }, () =>
              Math.floor(Math.random() * 10)
            ),
            borderColor: "#00e3ff",
            borderWidth: 2,
            pointBackgroundColor: "#ff6600",
          },
        ],
      };
    }
  }

  const handleChange = (range) => {
    setTimeRange(range);
    setChartData(getDataByRange(range));
  };

  return (
    <div className="linegraph__container">
      <div className="select-container">
        <button
          className={`select-button ${timeRange === "yearly" ? "active" : ""}`}
          onClick={() => handleChange("yearly")}
        >
          год
        </button>
        <button
          className={`select-button ${timeRange === "monthly" ? "active" : ""}`}
          onClick={() => handleChange("monthly")}
        >
          месяц
        </button>
        <button
          className={`select-button ${timeRange === "daily" ? "active" : ""}`}
          onClick={() => handleChange("daily")}
        >
          день
        </button>
      </div>
      <div className="info-box"> 3 kw</div>
      <div className="line-container">
        <Line
          data={chartData}
          options={{
            plugins: { legend: { display: true } },
            scales: {
              x: {
                ticks: {
                  color: "#ffffff", // X o'qidagi qiymatlarning rangi oq
                },
                grid: {
                  color: "#a39c9c6e", // X o'qidagi chiziqlar rangi oq
                },
              },
              y: {
                ticks: {
                  color: "#ffffff", // Y o'qidagi qiymatlarning rangi oq
                },
                grid: {
                  color: "#a39c9c6e", // X o'qidagi chiziqlar rangi oq
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LineGraph;
