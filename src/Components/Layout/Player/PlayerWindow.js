import React, { Fragment } from "react";
import classes from "./PlayerWindow.module.css";

const PlayerWindow = (props) => {
  return (
    <Fragment>
      <div
        className={classes.backdrop}
        onClick={props.onPlayerWindowClose}
      ></div>
      <div className={classes.playerWindow}>asdasd</div>
    </Fragment>
  );
};

export default PlayerWindow;
