import React from "react";
import classes from "./StatsContainer.module.css";

const StatsContainer = ({ children }) => {
  return <div className={classes.statsContainer}>{children}</div>;
};

export default StatsContainer;
