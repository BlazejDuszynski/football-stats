import React, { useContext, useEffect } from "react";
import classes from "./StatsGeneralItems.module.css";
import { GiSoccerField } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import PlayerContext from "../../../Store/player-context";

const StatsGeneralItems = () => {
  const playerCtx = useContext(PlayerContext);

  useEffect(() => {
    playerCtx.fetchPlayerData();
  }, [playerCtx.playerID]);

  if (playerCtx.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.statsGeneralItem}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <GiSoccerField className={classes.pitchIcon} />
            <p className={classes.title}>Games</p>
          </div>
          <p className={classes.data}>
            {playerCtx.playerData.statistics.games}
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
            <span className={classes.yellowCard}></span>
            <p className={classes.title}>Yellow cards</p>
          </div>
          <p className={classes.data}>
            {playerCtx.playerData.statistics.yellowCards}
          </p>
        </li>
        <li className={classes.listItem}>
          {" "}
          <div className={classes.description}>
            <span className={classes.doubleYellow}></span>
            <p className={classes.title}>Double yellow cards</p>
          </div>
          <p className={classes.data}>
            {playerCtx.playerData.statistics.yellowRedCards}
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
