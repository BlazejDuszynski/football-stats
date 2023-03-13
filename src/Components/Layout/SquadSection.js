import React, { useContext } from "react";
import SquadContext from "../Store/squad-context";
import classes from "./SquadSection.module.css";
import SquadTable from "./SquadTable";

function SquadSection() {
  const squadCtx = useContext(SquadContext);
  return (
    <section className={classes.squadSection}>
      <SquadTable />
    </section>
  );
}

export default SquadSection;
