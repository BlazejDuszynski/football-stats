import React, { useContext, useEffect } from "react";
import classes from "./SquadTable.module.css";
import SquadItem from "./SquadItem";
import SquadContext from "../Store/squad-context";

const SquadTable = () => {
  const squadCtx = useContext(SquadContext);
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
          return (
            <SquadItem
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
        })}
    </table>
  );
};

export default SquadTable;
