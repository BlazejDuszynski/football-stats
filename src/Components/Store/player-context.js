import React from "react";

const PlayerContext = React.createContext({
  playerData: {},
  fetchPlayerData: () => {},
  playerID: "",
  getPlayerID: (id) => {},
});

export default PlayerContext;
