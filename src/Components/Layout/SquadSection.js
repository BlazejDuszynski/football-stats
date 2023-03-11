import React from "react";
import classes from "./SquadSection.module.css";

function SquadSection(props) {
  return (
    <section className={classes.squadSection}>
      <table>
        <tr>
          <th>No.</th>
          <th>Player</th>
          <th>Games</th>
          <th>Minutes</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>Details</th>
        </tr>
        <tr>
          <td>1</td>
          <td>David de Gea</td>
          <td>37</td>
          <td>1536</td>
          <td>0</td>
          <td>0</td>
          <td>
            <button className={classes.moreButton}>More</button>
          </td>
        </tr>
      </table>
    </section>
  );
}

export default SquadSection;
