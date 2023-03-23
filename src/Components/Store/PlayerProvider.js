import React, { useContext, useState } from "react";
import PlayerContext from "./player-context";
import SquadContext from "./squad-context";

const PlayerProvider = (props) => {
  const [playerData, setPlayerData] = useState(null);
  const { season } = useContext(SquadContext);

  console.log(season);

  const fetchPlayerDataHandler = () => {};

  const playerContext = {
    player: {},
    fetchPlayerData: fetchPlayerDataHandler,
  };

  return (
    <PlayerContext.Provider value={playerContext}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
