import React from "react";
import classes from "./StatsGeneral.module.css";
import StatsGeneralItems from "./StatsGeneralItems";
import ChartContainer from "./Charts/ChartContainer";

const StatsGeneral = () => {
  return (
    <div className={classes.statsItemGeneral}>
      <header className={classes.header}>General</header>
      <StatsGeneralItems />
      <ChartContainer />
    </div>
  );
};

export default StatsGeneral;
