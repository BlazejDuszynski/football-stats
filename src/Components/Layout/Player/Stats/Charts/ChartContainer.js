import React from "react";
import classes from "./ChartContainer.module.css";

const ChartContainer = ({ children }) => {
  return <div className={classes.chartContainer}>{children}</div>;
};

export default ChartContainer;
