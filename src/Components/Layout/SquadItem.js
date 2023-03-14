import React from "react";
import classes from "./SquadItem.module.css";

const SquadItem = (props) => {
  return (
    <tr className={classes.squadItem}>
      <td>{props.name}</td>
      <td>{props.games}</td>
      <td>{props.minutes}</td>
      <td>{props.goals}</td>
      <td>{props.assists}</td>
      <td>
        <button className={classes.moreButton} onClick={props.onWindowOpen}>
          More
        </button>
      </td>
    </tr>
  );
};

export default SquadItem;
