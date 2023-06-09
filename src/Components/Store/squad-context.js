import React from "react";

const SquadContext = React.createContext({
  seasons: [],
  season: "",
  selectSeasonHandler: () => {},
  squad: [],
  fetchSquadHandler: function () {},
  dropdownActive: "",
  toggleDropdown: () => {},
  loading: "",
});

export default SquadContext;
