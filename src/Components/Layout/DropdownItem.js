import React from "react";
import classes from "./DropdownItem.module.css";

function DropdownItem(props) {
  const selectSeasonHandler = () => {
    props.onClick(props.season);
  };

  return (
    <li className={classes.menuItem} onClick={selectSeasonHandler}>
      {props.season}
    </li>
  );
}

export default DropdownItem;
