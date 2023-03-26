import React, { Fragment, useContext, useEffect } from "react";
import DropdownPlayerWindow from "./DropdownPlayerWindow";
import classes from "./PlayerWindow.module.css";
import PlayerWindowHeader from "./PlayerWindowHeader";
import StatsContainer from "./Stats/StatsContainer";
import StatsItem from "./Stats/StatsItem";
import StatsGeneral from "./Stats/StatsGeneral";
import PlayerContext from "../../Store/player-context";
import { IoClose } from "react-icons/io5";

const PlayerWindow = (props) => {
  const playerCtx = useContext(PlayerContext);

  useEffect(() => {
    playerCtx.fetchPlayerData();
  }, [playerCtx.playerID]);

  if (playerCtx.loading) {
    console.log(playerCtx.loading);
    return <div>loading...</div>;
  } else {
    return (
      <Fragment>
        <div
          className={classes.backdrop}
          onClick={props.onPlayerWindowClose}
        ></div>
        <div className={classes.playerWindow}>
          <button
            className={classes.closeButton}
            onClick={props.onPlayerWindowClose}
          >
            <IoClose className={classes.closeButtonIcon} />
          </button>
          <PlayerWindowHeader />
          {/* <DropdownPlayerWindow /> */}
          <StatsContainer>
            <StatsGeneral />
            {/* <StatsItem header="Passes" />
            <StatsItem header="Dribbles" />
            <StatsItem header="Tackles" /> */}
          </StatsContainer>
        </div>
      </Fragment>
    );
  }
};

export default PlayerWindow;
