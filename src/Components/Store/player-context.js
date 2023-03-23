import React from "react";

const PlayerContext = React.createContext({
  player: {},
  fetchPlayerData: () => {},
  playerID: "",
  getPlayerID: () => {},
});

export default PlayerContext;
