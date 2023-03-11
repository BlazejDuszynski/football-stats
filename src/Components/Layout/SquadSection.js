import React from "react";

function SquadSection(props) {
  return (
    <div>
      <table>
        <tr>
          <th>No.</th>
          <th>Player</th>
          <th>Games</th>
          <th>Minutes</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>More</th>
        </tr>
        <tr>
          <td>1</td>
          <td>David de Gea</td>
          <td>37</td>
          <td>1536</td>
          <td>Goals</td>
          <td>Minutes</td>
          <td>
            <button>More</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default SquadSection;
