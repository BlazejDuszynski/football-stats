import React, { useState } from "react";

const SquadProvider = (props) => {
  const [selectedSeason, setSelectedSeason] = useState("");

  const selectSeasonHandler = (season) => {
    setSelectedSeason(season);
    // setIsDropDownActive(false);
  };

  const SquadContext = {
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
    squad: [],
    fetchSquadHandler: function () {},
  };

  return (
    <SquadContext.Provider value={SquadContext}>
      {props.children}
    </SquadContext.Provider>
  );
};

export default SquadProvider;
