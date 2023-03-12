import React from "react";

const SquadContext = React.createContext({
  season: "",
  selectSeasonHandler: () => {},
  squad: [],
  fetchSquadHandler: function () {},
});

export default SquadContext;
