import React, { useContext, useState } from "react";
import PlayerContext from "./player-context";
import SquadContext from "./squad-context";

const PlayerProvider = (props) => {
  const [playerID, setPlayerID] = useState(null);
  const [playerData, setPlayerData] = useState({});
  const { season } = useContext(SquadContext);

  console.log(playerID);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "72cff716cdmshc41548afe41ba07p18c95cjsn9521d9d88440",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  async function fetchPlayerDataHandler() {
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/players?id=" +
        playerID +
        "&season=" +
        season.substring(0, 4),
      options
    );
    const fetchedPlayerData = await response.json();
    console.log(fetchedPlayerData);
    setPlayerData(fetchedPlayerData);
  }

  const getPlayerIDHandler = (id) => {
    setPlayerID(id);
  };

  const playerContext = {
    playerData: {},
    fetchPlayerData: fetchPlayerDataHandler,
    playerID: playerID,
    getPlayerID: getPlayerIDHandler,
  };

  return (
    <PlayerContext.Provider value={playerContext}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
