import React, { useState } from "react";
import PlayerWindowContext from "./playerWindow-context";

const PlayerWindowProvider = (props) => {
  const [isPlayerWindowOpen, setIsPlayerWindowOpen] = useState(false);

  const openPlayerWindowHandler = () => {
    setIsPlayerWindowOpen(true);
  };

  const closePlayerWindowHandler = () => {
    setIsPlayerWindowOpen(false);
  };

  const playerWindowContext = {
    isPlayerWindowOpen: isPlayerWindowOpen,
    openPlayerWindow: openPlayerWindowHandler,
    closePlayerWindow: closePlayerWindowHandler,
  };

  return (
    <PlayerWindowContext.Provider value={playerWindowContext}>
      {props.children}
    </PlayerWindowContext.Provider>
  );
};

export default PlayerWindowProvider;
