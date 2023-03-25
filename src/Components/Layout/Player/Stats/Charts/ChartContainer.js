import React from "react";
import classes from "./ChartContainer.module.css";
import PieChart from "./PieChart";

const ChartContainer = () => {
  const dataFirst = {
    labels: ["Starting 11", "Bench"],
    datasets: [
      {
        label: "Starting 11",
        data: [76, 24],
        backgroundColor: ["#4776E6", "#1c1b40"],
        hoverBackgroundColor: ["#4776E6", "#1c1b40"],
        borderColor: ["#4776E6", "#1c1b40"],
        hoverBorderColor: ["#4776E6", "#1c1b40"],
        borderWidth: 0,
      },
    ],
  };

  const dataSecond = {
    labels: ["Goals involvement", ""],
    datasets: [
      {
        label: "Goals involvement",
        data: [38, 62],
        backgroundColor: ["#4776E6", "#1c1b40"],
        hoverBackgroundColor: ["#4776E6", "#1c1b40"],
        borderColor: ["#4776E6", "#1c1b40"],
        hoverBorderColor: ["#4776E6", "#1c1b40"],
        borderWidth: 0,
      },
    ],
  };

  const dataThird = {
    labels: ["Minutes played", ""],
    datasets: [
      {
        label: "Minutes played",
        data: [88, 12],
        backgroundColor: ["#4776E6", "#1c1b40"],
        hoverBackgroundColor: ["#4776E6", "#1c1b40"],
        borderColor: ["#4776E6", "#1c1b40"],
        hoverBorderColor: ["#4776E6", "#1c1b40"],
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
    <div className={classes.chartContainer}>
      <PieChart data={dataThird} options={options} />
      <PieChart data={dataFirst} options={options} />
      <PieChart data={dataSecond} options={options} />
    </div>
  );
};

export default ChartContainer;
