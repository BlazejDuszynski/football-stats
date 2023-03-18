import React from "react";
import PlayerDetail from "./PlayerDetail";
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
        <PlayerDetail title="Date of birth" data="10.08.1971" />
        <PlayerDetail title="Nationality" data="Ireland" />
        <PlayerDetail title="Position" data="Midfielder" />
        <PlayerDetail title="Weight" data="76 kg" />
        <PlayerDetail title="Height" data="178 cm" />
        <PlayerDetail title="Team" data="Manchester United" />
      </div>
    </header>
  );
}

export default PlayerWindowHeader;
