import React from "react";

const PlayerWindowContext = React.createContext({
  openPlayerWindow: () => {},
  closePlayerWindow: () => {},
  isPlayerWindowOpen: false,
});

export default PlayerWindowContext;
