import React, { useContext } from "react";
import "./SquadTable.module.css";
import SquadItem from "./SquadItem";
import SquadContext from "../Store/squad-context";
import PlayerWindowContext from "../Store/playerWindow-context";

const SquadTable = () => {
  const squadCtx = useContext(SquadContext);
  const { openWindow } = useContext(PlayerWindowContext);

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
              onWindowOpen={openWindow}
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
