import React, { useContext } from "react";
import "./SquadTable.module.css";
import SquadItem from "./SquadItem";
import SquadContext from "../Store/squad-context";

const SquadTable = (props) => {
  const squadCtx = useContext(SquadContext);
  let premierLeagueStatsIndex = 0;
  console.log(squadCtx.squad[0]);
  if (squadCtx.loading) {
    return <div>Loading...</div>;
  } else {
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
        {squadCtx.squad[0].length > 0 &&
          squadCtx.squad[0].map((item) => {
            console.log(item.statistics);
            // for (
            //   let itemIndex = 0;
            //   itemIndex < squadCtx.squad[0].length;
            //   itemIndex++
            // ) {
            //   console.log(item);
            // for (
            //   let statsIndex = 0;
            //   statsIndex < item[itemIndex].statistics.length;
            //   statsIndex++
            // ) {
            //   if (
            //     item[itemIndex].statistics[statsIndex].league.name ===
            //     "Premier League"
            //   ) {
            //     premierLeagueStatsIndex = statsIndex;
            //     break;
            //   } else {
            //     premierLeagueStatsIndex = 0;
            //   }
            // }
            return (
              <SquadItem
                onPlayerWindowOpen={props.onPlayerWindowOpen}
                key={item.player.id}
                id={item.player.id}
                name={item.player.name}
                games={item.statistics[0].games.appearences}
                minutes={item.statistics[0].games.minutes}
                goals={item.statistics[0].goals.total}
                assists={
                  item.statistics[0].goals.assists === null
                    ? 0
                    : item.statistics[0].goals.assists
                }
              />
            );
            // );
            // }
          })}
      </table>
    );
  }
};

export default SquadTable;
