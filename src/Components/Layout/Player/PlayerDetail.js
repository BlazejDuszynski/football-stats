import React from "react";
import classes from "./PlayerDetail.module.css"

function PlayerDetail(props) {
  return (
    <div className={classes.playerDetail}>
      <p className={classes.title}>{props.title}</p>
      <p className={classes.data}>{props.data}</p>
    </div>
  );
}

export default PlayerDetail;
