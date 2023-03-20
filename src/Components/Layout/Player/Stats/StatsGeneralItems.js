import React from "react";
import classes from "./StatsGeneralItems.module.css";
import { GiSoccerField } from "react-icons/gi";

const StatsGeneralItems = () => {
  return (
    <div className={classes.statsGeneralItem}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <GiSoccerField className={classes.pitchIcon}/>
            <p className={classes.title}>Games</p>
          </div>
          <p className={classes.data}>31</p>
        </li>
        <li className={classes.listItem}>Goals</li>
        <li className={classes.listItem}>Assists</li>
      </ul>
      <ul className={classes.list}>
        <li className={classes.listItem}>Yellow cards</li>
        <li className={classes.listItem}>Double yellow cards</li>
        <li className={classes.listItem}>Red cards</li>
      </ul>
    </div>
  );
};

export default StatsGeneralItems;
