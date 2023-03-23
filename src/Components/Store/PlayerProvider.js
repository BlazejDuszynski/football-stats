import React, { useState } from "react";
import PlayerContext from "./player-context";

const PlayerProvider = (props) => {
  const [playerData, setPlayerData] = useState(null);

  

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
