import React from "react";
import PlayerDetail from "./PlayerDetail";
import classes from "./PlayerWindowHeader.module.css";
import { useContext } from "react";
import PlayerContext from "../../Store/player-context";

function PlayerWindowHeader() {
  const playerCtx = useContext(PlayerContext);

  return (
    <header className={classes.header}>
      <div className={classes.intro}>
        <img
          src="https://assets.manutd.com/AssetPicker/images/0/0/10/126/687719/Legends-Profile_Roy-Keane1523462361304.jpg  "
          alt="Roy Keane face"
          className={classes.photo}
        ></img>
        <div className={classes.name}>
          <p className={classes.name__first}>
            {playerCtx.playerData.info.firstName}
          </p>
          <p className={classes.name__second}>
            {playerCtx.playerData.info.lastName}
          </p>
          <p className={classes.name__number}>
            <span className={classes.name__hash}>#</span>
            {playerCtx.playerData.info.kitNumber}
          </p>
        </div>
      </div>
      <div className={classes.details}>
        <PlayerDetail
          title="Date of birth"
          data={playerCtx.playerData.info.birthDate}
        />
        <PlayerDetail
          title="Nationality"
          data={playerCtx.playerData.info.nationality}
        />
        <PlayerDetail
          title="Position"
          data={playerCtx.playerData.info.position}
        />
        <PlayerDetail title="Weight" data={playerCtx.playerData.info.weight} />
        <PlayerDetail title="Height" data={playerCtx.playerData.info.height} />
        <PlayerDetail title="Team" data={playerCtx.playerData.info.team} />
      </div>
    </header>
  );
}

export default PlayerWindowHeader;
