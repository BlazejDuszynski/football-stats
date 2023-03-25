import React from "react";
import classes from "./PieChart.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {
  // const dataSum = props.data.datasets[0].data.reduce(
  //   (partialSum, a) => partialSum + a,
  //   0
  // );

  // const summaryNumber = (props.data.datasets[0].data[0] / dataSum) * 100;
  // const summaryNumberPercentage = summaryNumber + "%";

  return (
    <div className={classes.pieChartContainer}>
      <Doughnut data={props.data} options={props.options}></Doughnut>
      <p className={classes.pieChartSummaryNumber}>{props.summary + "%"}</p>
      <label className={classes.pieChartLabel}>
        {props.data.datasets[0].label}
      </label>
    </div>
  );
};

export default PieChart;
