import React from "react";
import classes from "./PlayerWindowHeader.module.css";

function PlayerWindowHeader(props) {
  return (
    <header className={classes.header}>
      <div className={classes.intro}>
        <div className={classes.photo}></div>
        <div className={classes.name}>
          <p className={classes.name__first}>Roy</p>
          <p className={classes.name__second}>Keane</p>
        </div>
      </div>
      <div className={classes.details}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default PlayerWindowHeader;
