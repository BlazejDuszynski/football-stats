import React from "react";
import classes from "./SquadSection.module.css";
import SquadTable from "./SquadTable";

function SquadSection() {
  return (
    <section className={classes.squadSection}>
      <SquadTable />
    </section>
  );
}

export default SquadSection;
