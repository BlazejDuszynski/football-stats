import React, { useContext } from "react";
import classes from "./StatsGeneralItems.module.css";
import { GiSoccerField } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import { IoTimerOutline } from "react-icons/io5";
import PlayerContext from "../../../Store/player-context";

const StatsGeneralItems = () => {
  const playerCtx = useContext(PlayerContext);

  if (playerCtx.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.statsGeneralItem}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <GiSoccerField className={classes.pitchIcon} />
            <p className={classes.title}>Games / Starting '11'</p>
          </div>
          <p className={classes.data}>
            {playerCtx.playerData.statistics.games +
              "/" +
              playerCtx.playerData.statistics.lineups}
          </p>
        </li>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <IoIosFootball className={classes.goalIcon} />
            <p className={classes.title}>Goals</p>
          </div>
          <p className={classes.data}>
            {playerCtx.playerData.statistics.goals}
          </p>
        </li>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <IoIosFootball className={classes.assistIcon} />
            <p className={classes.title}>Assists</p>
          </div>
          <p className={classes.data}>
            {playerCtx.playerData.statistics.assists === null
              ? 0
              : playerCtx.playerData.statistics.assists}
          </p>
        </li>
      </ul>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <IoTimerOutline className={classes.minutes} />
            <p className={classes.title}>Minutes</p>
          </div>
          <p className={classes.data}>
            {playerCtx.playerData.statistics.minutes}
          </p>
        </li>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <span className={classes.yellowCard}></span>
            <p className={classes.title}>Yellow cards</p>
          </div>
          <p className={classes.data}>
            {playerCtx.playerData.statistics.yellowCards}
          </p>
        </li>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <span className={classes.redCard}></span>
            <p className={classes.title}>Red cards</p>
          </div>
          <p className={classes.data}>
            {playerCtx.playerData.statistics.redCards}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default StatsGeneralItems;
