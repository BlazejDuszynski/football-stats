import React from "react";
import classes from "./SquadSection.module.css";
import SquadTable from "./SquadTable";

function SquadSection(props) {
  return (
    <section className={classes.squadSection}>
      <SquadTable
        onPlayerWindowOpen={props.onPlayerWindowOpen}
      />
    </section>
  );
}

export default SquadSection;
