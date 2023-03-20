import React, { Fragment } from "react";
import DropdownPlayerWindow from "./DropdownPlayerWindow";
import classes from "./PlayerWindow.module.css";
import PlayerWindowHeader from "./PlayerWindowHeader";
import SquadProvider from "../../Store/SquadProvider";

const PlayerWindow = (props) => {
  return (
    <Fragment>
      <div
        className={classes.backdrop}
        onClick={props.onPlayerWindowClose}
      ></div>
      <div className={classes.playerWindow}>
        <PlayerWindowHeader />
        <DropdownPlayerWindow />
      </div>
    </Fragment>
  );
};

export default PlayerWindow;
