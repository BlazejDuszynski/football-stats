import React from "react";
import classes from "./DropdownItemPlayerWindow.module.css";

function DropdownItemPlayerWindow(props) {
  const selectSeasonHandler = () => {
    props.onClick(props.season);
  };

  return (
    <li className={classes.menuItem} onClick={selectSeasonHandler}>
      {props.season}
    </li>
  );
}

export default DropdownItemPlayerWindow;
