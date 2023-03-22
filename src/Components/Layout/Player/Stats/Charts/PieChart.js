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
        hoverBackgroundColor: ["#4776E6", "#1c1b36"],
        borderColor: ["#4776E6", "#1c1b36"],
        hoverBorderColor: ["#4776E6", "#1c1b36"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };
  return (
    <div className={classes.pieChartContainer}>
      <Doughnut data={data} options={options}></Doughnut>
      <p className={classes.pieChartSummaryNumber}>76%</p>
      <label className={classes.pieChartLabel}>Starting 11</label>
    </div>
  );
};

export default PieChart;
