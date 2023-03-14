import React from "react";

const PlayerWindowContext = React.createContext({
  openPlayerWindow: () => {},
  closePlayerWindow: () => {},
  playerWindowOpen: "",
});

export default PlayerWindowContext;
