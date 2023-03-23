import React from "react";

const PlayerContext = React.createContext({
  player: {},
  fetchPlayerData: () => {},
});

export default PlayerContext;
