import React from "react";
import PlayerDetail from "./PlayerDetail";
import classes from "./PlayerWindowHeader.module.css";
import { useContext } from "react";
import PlayerContext from "../../Store/player-context";

function PlayerWindowHeader() {
  const playerCtx = useContext(PlayerContext);
  console.log(playerCtx.playerData)

  return (
    <header className={classes.header}>
      <div className={classes.intro}>
        <img
          src="https://assets.manutd.com/AssetPicker/images/0/0/10/126/687719/Legends-Profile_Roy-Keane1523462361304.jpg  "
          alt="Roy Keane face"
          className={classes.photo}
        ></img>
        <div className={classes.name}>
          <p className={classes.name__first}>Roy</p>
          <p className={classes.name__second}>Keane</p>
          <p className={classes.name__number}>
            <span className={classes.name__hash}>#</span>16
          </p>
        </div>
      </div>
      <div className={classes.details}>
        <PlayerDetail title="Date of birth" data="10.08.1971" />
        <PlayerDetail title="Nationality" data="Ireland" />
        <PlayerDetail title="Position" data="Midfielder" />
        <PlayerDetail title="Weight" data="76 kg" />
        <PlayerDetail title="Height" data="178 cm" />
        <PlayerDetail title="Team" data="Manchester United" />
      </div>
    </header>
  );
}

export default PlayerWindowHeader;
