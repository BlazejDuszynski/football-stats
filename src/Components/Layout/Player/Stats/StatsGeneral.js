import React from "react";
import classes from "./StatsGeneral.module.css";
import StatsGeneralItems from "./StatsGeneralItems";

const StatsGeneral = (props) => {
  return (
    <div className={classes.statsItemGeneral}>
      <header className={classes.header}>General</header>
      <StatsGeneralItems />
    </div>
  );
};

export default StatsGeneral;
