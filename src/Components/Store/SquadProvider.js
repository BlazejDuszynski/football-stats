import React, { useState } from "react";
import SquadContext from "./squad-context";

const SquadProvider = (props) => {
  const [selectedSeason, setSelectedSeason] = useState("");
  const [isDropdownActive, setIsDropDownActive] = useState(false);
  const [squad, setSquad] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const convertedSquad = [];
  const selectSeasonHandler = (season) => {
    setSelectedSeason(season);
    setIsDropDownActive(false);
  };

  const toggleDropdownHandler = () => {
    setIsDropDownActive(!isDropdownActive);
  };

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "72cff716cdmshc41548afe41ba07p18c95cjsn9521d9d88440",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  async function onDropdownSubmit() {
    const response = await fetch(
      // "https://api-football-v1.p.rapidapi.com/v3/players?team=33&season=" +
      //   selectedSeason.substring(0, 4),
      "https://football-games-researcher-default-rtdb.firebaseio.com/seasons/" +
        selectedSeason.substring(0, 4) +
        ".json",
      options
    );
    const teamSquad = await response.json();
    // fetch(
    //   "https://football-games-researcher-default-rtdb.firebaseio.com/seasons/2008.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(teamSquad),
    //     headers: { "Content-Type": "application/json" },
    //   }
    // );
    for (const key in teamSquad) {
      convertedSquad.push(teamSquad[key].response);
    }
    // console.log(convertedSquad);
    setSquad(convertedSquad);
    setIsLoading(false);
  }

  const squadContext = {
    seasons: [
      "2008/2009",
      "2009/2010",
      "2010/2011",
      "2011/2012",
      "2012/2013",
      "2013/2014",
      "2014/2015",
      "2015/2016",
      "2016/2017",
      "2017/2018",
      "2018/2019",
      "2019/2020",
      "2020/2021",
    ],
    season: selectedSeason,
    selectSeasonHandler: selectSeasonHandler,
    squad: squad,
    fetchSquadHandler: onDropdownSubmit,
    dropdownActive: isDropdownActive,
    toggleDropdown: toggleDropdownHandler,
    loading: isLoading,
  };

  return (
    <SquadContext.Provider value={squadContext}>
      {props.children}
    </SquadContext.Provider>
  );
};

export default SquadProvider;
