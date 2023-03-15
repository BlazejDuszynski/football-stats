import React, { Fragment } from "react";
import classes from "./PlayerWindow.module.css";
import PlayerWindowHeader from "./PlayerWindowHeader";

const PlayerWindow = (props) => {
  return (
    <Fragment>
      <div
        className={classes.backdrop}
        onClick={props.onPlayerWindowClose}
      ></div>
      <div className={classes.playerWindow}>
        <PlayerWindowHeader></PlayerWindowHeader>
      </div>
    </Fragment>
  );
};

export default PlayerWindow;
