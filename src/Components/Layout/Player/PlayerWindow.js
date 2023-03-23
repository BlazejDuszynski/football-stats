import React, { Fragment } from "react";
import DropdownPlayerWindow from "./DropdownPlayerWindow";
import classes from "./PlayerWindow.module.css";
import PlayerWindowHeader from "./PlayerWindowHeader";
import StatsContainer from "./Stats/StatsContainer";
import StatsItem from "./Stats/StatsItem";
import StatsGeneral from "./Stats/StatsGeneral";

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
        <StatsContainer>
          <StatsGeneral />
          {/* <StatsItem header="Passes" />
          <StatsItem header="Dribbles" />
          <StatsItem header="Tackles" /> */}
        </StatsContainer>
      </div>
    </Fragment>
  );
};

export default PlayerWindow;
