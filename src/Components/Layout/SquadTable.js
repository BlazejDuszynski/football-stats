import React, { useContext } from "react";
import "./SquadTable.module.css";
import SquadItem from "./SquadItem";
import SquadContext from "../Store/squad-context";

const SquadTable = (props) => {
  const squadCtx = useContext(SquadContext);
  let premierLeagueStatsIndex = 0;
  console.log(squadCtx.squad);
  return (
    <table>
      <tr>
        <th>Player</th>
        <th>Games</th>
        <th>Minutes</th>
        <th>Goals</th>
        <th>Assists</th>
        <th>Details</th>
      </tr>
      {squadCtx.squad.response &&
        squadCtx.squad.response.map((item) => {
          for (let i = 0; i < item.statistics.lenght; i++) {
            if (item.statistics[i].league.name === "Premier League") {
              premierLeagueStatsIndex = i;
              break;
            } else {
              premierLeagueStatsIndex = 0;
            }
          }
          return (
            <SquadItem
              onPlayerWindowOpen={props.onPlayerWindowOpen}
              key={item.player.id}
              id={item.player.id}
              name={item.player.name}
              games={item.statistics[premierLeagueStatsIndex].games.appearences}
              minutes={item.statistics[premierLeagueStatsIndex].games.minutes}
              goals={item.statistics[premierLeagueStatsIndex].goals.total}
              assists={
                item.statistics[premierLeagueStatsIndex].goals.assists === null
                  ? 0
                  : item.statistics[premierLeagueStatsIndex].goals.assists
              }
            />
          );
        })}
    </table>
  );
};

export default SquadTable;
