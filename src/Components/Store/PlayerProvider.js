import React, { useContext, useState } from "react";
import PlayerContext from "./player-context";
import SquadContext from "./squad-context";

const PlayerProvider = (props) => {
  const [playerID, setPlayerID] = useState(null);
  const [playerData, setPlayerData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { season } = useContext(SquadContext);

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
    const player = {
      info: {
        name: fetchedPlayerData.response[0].player.name,
        birthDate: fetchedPlayerData.response[0].player.birth.date,
        nationality: fetchedPlayerData.response[0].player.nationality,
        position: fetchedPlayerData.response[0].statistics[0].games.position,
        weight: fetchedPlayerData.response[0].player.weight,
        height: fetchedPlayerData.response[0].player.height,
        team: fetchedPlayerData.response[0].statistics[0].team.name,
        kitNumber: "9",
      },
      statistics: {
        games: fetchedPlayerData.response[0].statistics[0].games.appearences,
        lineups: fetchedPlayerData.response[0].statistics[0].games.lineups,
        minutes: fetchedPlayerData.response[0].statistics[0].games.minutes,
        goals: fetchedPlayerData.response[0].statistics[0].goals.total,
        assists: fetchedPlayerData.response[0].statistics[0].goals.assists,
        redCards: fetchedPlayerData.response[0].statistics[0].cards.red,
        yellowCards: fetchedPlayerData.response[0].statistics[0].cards.yellow,
        yellowRedCards:
          fetchedPlayerData.response[0].statistics[0].cards.yellowred,
      },
    };
    setPlayerData(player);
    setIsLoading(false);
  }

  const getPlayerIDHandler = (id) => {
    setPlayerID(id);
  };

  const playerContext = {
    playerData: playerData,
    fetchPlayerData: fetchPlayerDataHandler,
    playerID: playerID,
    getPlayerID: getPlayerIDHandler,
    loading: isLoading,
  };

  return (
    <PlayerContext.Provider value={playerContext}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
