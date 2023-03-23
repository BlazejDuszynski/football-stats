import React, { useState } from "react";
import SquadContext from "./squad-context";

const SquadProvider = (props) => {
  const [selectedSeason, setSelectedSeason] = useState("");
  const [isDropdownActive, setIsDropDownActive] = useState(false);
  const [squad, setSquad] = useState([]);

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
      "https://api-football-v1.p.rapidapi.com/v3/players?team=33&season=" +
        selectedSeason.substring(0, 4),
      options
    );
    const teamSquad = await response.json();
    setSquad(teamSquad);
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
  };

  return (
    <SquadContext.Provider value={squadContext}>
      {props.children}
    </SquadContext.Provider>
  );
};

export default SquadProvider;
