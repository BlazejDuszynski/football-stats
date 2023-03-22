import React from "react";
import classes from "./ChartContainer.module.css";
import PieChart from "./PieChart";

const ChartContainer = () => {
  return (
    <div className={classes.chartContainer}>
      <PieChart />
      <PieChart />
      <PieChart />
    </div>
  );
};

export default ChartContainer;
