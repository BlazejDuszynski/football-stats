import React, { useContext } from "react";
import PlayerContext from "../../../../Store/player-context";
import classes from "./ChartContainer.module.css";
import PieChart from "./PieChart";

const ChartContainer = () => {
  const playerCtx = useContext(PlayerContext);

  const lineups = (
    (playerCtx.playerData.statistics.lineups / 38) *
    100
  ).toFixed(0);

  const goalsInvolvement = (
    ((playerCtx.playerData.statistics.goals +
      playerCtx.playerData.statistics.assists) /
      78) *
    100
  ).toFixed(0);

  const minutesPlayed = (
    (playerCtx.playerData.statistics.minutes / 3420) *
    100
  ).toFixed(0);

  const dataFirst = {
    labels: ["Starting 11", "Bench"],
    datasets: [
      {
        label: "Starting 11",
        data: [lineups, 100 - lineups],
        backgroundColor: ["#4776E6", "#1c1b40"],
        hoverBackgroundColor: ["#4776E6", "#1c1b40"],
        borderColor: ["#4776E6", "#1c1b40"],
        hoverBorderColor: ["#4776E6", "#1c1b40"],
        borderWidth: 0,
      },
    ],
  };

  const dataSecond = {
    labels: ["Goals involvement", ""],
    datasets: [
      {
        label: "Goals involvement",
        data: [goalsInvolvement, 100 - goalsInvolvement],
        backgroundColor: ["#4776E6", "#1c1b40"],
        hoverBackgroundColor: ["#4776E6", "#1c1b40"],
        borderColor: ["#4776E6", "#1c1b40"],
        hoverBorderColor: ["#4776E6", "#1c1b40"],
        borderWidth: 0,
      },
    ],
  };

  const dataThird = {
    labels: ["Minutes played", ""],
    datasets: [
      {
        label: "Minutes played",
        data: [minutesPlayed, 100 - minutesPlayed],
        backgroundColor: ["#4776E6", "#1c1b40"],
        hoverBackgroundColor: ["#4776E6", "#1c1b40"],
        borderColor: ["#4776E6", "#1c1b40"],
        hoverBorderColor: ["#4776E6", "#1c1b40"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
  };
  return (
    <div className={classes.chartContainer}>
      <PieChart data={dataFirst} options={options} summary={lineups} />
      <PieChart
        data={dataSecond}
        options={options}
        summary={goalsInvolvement}
      />
      <PieChart data={dataThird} options={options} summary={minutesPlayed} />
    </div>
  );
};

export default ChartContainer;
