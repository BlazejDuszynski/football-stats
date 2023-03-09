import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import classes from "./Dropdown.module.css";

const Dropdown = () => {
  const [isDropdownActive, setIsDropDownActive] = useState(false);

  const activateDropdownHandler = () => {
    setIsDropDownActive(!isDropdownActive);
  };

  return (
    <div className={classes.dropdown}>
      <div className={classes.select} onClick={activateDropdownHandler}>
        <span></span>
        <ArrowDropDownIcon
          className={isDropdownActive && classes.arrowIconRotated}
        />
      </div>
      <ul className={isDropdownActive ? classes.menu__active : classes.menu}>
        <li>sdas</li>
      </ul>
    </div>
  );
};

export default Dropdown;
