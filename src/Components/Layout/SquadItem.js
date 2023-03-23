import React, { useContext } from "react";
import PlayerContext from "../Store/player-context";
import classes from "./SquadItem.module.css";

const SquadItem = (props) => {
  const playerCtx = useContext(PlayerContext);

  const handleClick = () => {
    props.onPlayerWindowOpen();
    playerCtx.getPlayerID(+props.id);
    playerCtx.fetchPlayerData();
  };

  return (
    <tr className={classes.squadItem}>
      <td>{props.name}</td>
      <td>{props.games}</td>
      <td>{props.minutes}</td>
      <td>{props.goals}</td>
      <td>{props.assists}</td>
      <td>
        <button className={classes.moreButton} onClick={handleClick}>
          More
        </button>
      </td>
    </tr>
  );
};

export default SquadItem;
