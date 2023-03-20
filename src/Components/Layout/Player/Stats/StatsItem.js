import React from "react";
import classes from "./StatsItem.module.css";

const StatsItem = (props) => {
  const itemClass = props.additionalClass + " " + classes.statsItem;
  return (
    <div className={itemClass}>
      <header className={classes.header}>{props.header}</header>
    </div>
  );
};

export default StatsItem;
