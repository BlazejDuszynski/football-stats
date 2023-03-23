import React from "react";

const PlayerContext = React.createContext({
  playerData: {},
  fetchPlayerData: () => {},
  playerID: "",
  getPlayerID: (id) => {},
  loading: "",
});

export default PlayerContext;
