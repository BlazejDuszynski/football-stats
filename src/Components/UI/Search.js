import React from "react";
import classes from "./Search.module.css";

function Search({ children }) {
  return <section className={classes.searchSection}>{children}</section>;
}

export default Search;
