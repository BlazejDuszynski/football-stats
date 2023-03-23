import React, { useContext } from "react";
import classes from "./StatsGeneralItems.module.css";
import { GiSoccerField } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import PlayerContext from "../../../Store/player-context";

const StatsGeneralItems = () => {
  const {
    playerData: { statistics },
  } = useContext(PlayerContext);

  return (
    <div className={classes.statsGeneralItem}>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <GiSoccerField className={classes.pitchIcon} />
            <p className={classes.title}>Games</p>
          </div>
          <p className={classes.data}>{statistics.games}</p>
        </li>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <IoIosFootball className={classes.goalIcon} />
            <p className={classes.title}>Goals</p>
          </div>
          <p className={classes.data}>{statistics.goals}</p>
        </li>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <IoIosFootball className={classes.assistIcon} />
            <p className={classes.title}>Assists</p>
          </div>
          <p className={classes.data}>
            {statistics.assists === null ? 0 : statistics.assists}
          </p>
        </li>
      </ul>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <span className={classes.yellowCard}></span>
            <p className={classes.title}>Yellow cards</p>
          </div>
          <p className={classes.data}>{statistics.yellowCards}</p>
        </li>
        <li className={classes.listItem}>
          {" "}
          <div className={classes.description}>
            <span className={classes.doubleYellow}></span>
            <p className={classes.title}>Double yellow cards</p>
          </div>
          <p className={classes.data}>{statistics.yellowRedCards}</p>
        </li>
        <li className={classes.listItem}>
          <div className={classes.description}>
            <span className={classes.redCard}></span>
            <p className={classes.title}>Red cards</p>
          </div>
          <p className={classes.data}>{statistics.redCards}</p>
        </li>
      </ul>
    </div>
  );
};

export default StatsGeneralItems;
