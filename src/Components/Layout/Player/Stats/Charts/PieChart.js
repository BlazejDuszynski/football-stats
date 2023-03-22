import React from "react";
import classes from "./PieChart.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Starting 11", "Bench"],
    datasets: [
      {
        label: "Starting 11 chart",
        data: [76, 24],
        backgroundColor: ["#4776E6", "#1c1b36"],
        borderColor: ["#4776E6", "#1c1b36"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className={classes.pieChartContainer}>
      <Doughnut data={data} options={options}></Doughnut>
      <label className={classes.pieChartLabel}>Starting 11</label>
    </div>
  );
};

export default PieChart;
