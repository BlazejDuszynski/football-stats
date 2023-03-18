import React from "react";
import classes from "./PlayerWindowHeader.module.css";

function PlayerWindowHeader(props) {
  return (
    <header className={classes.header}>
      <div className={classes.intro}>
        <img
          src="https://img.a.transfermarkt.technology/portrait/header/3396-1570441538.jpg?lm=1"
          alt="Roy Keane face"
          className={classes.photo}
        ></img>
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
