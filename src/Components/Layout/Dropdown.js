import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import classes from "./Dropdown.module.css";

const Dropdown = () => {
  const [isDropdownActive, setIsDropDownActive] = useState(false);

  const activateDropdownHandler = () => {
    setIsDropDownActive(!isDropdownActive);
  };

  const seasons = [
    "2008/2009",
    "2009/2010",
    "2010/2011",
    "2011/2012",
    "2012/2013",
    "2013/2014",
    "2014/2015",
    "2015/2016",
    "2016/2017",
    "2017/2018",
    "2018/2019",
    "2019/2020",
    "2020/2021",
  ];

  return (
    <div className={classes.dropdown}>
      <div className={classes.select} onClick={activateDropdownHandler}>
        <span></span>
        <ArrowDropDownIcon
          className={isDropdownActive? classes.arrowIconRotated : classes.arrowIcon}
        />
      </div>
      <ul className={isDropdownActive ? classes.menu__active : classes.menu}>
        {seasons.map((season) => {
          return <li className={classes.menuItem}>{season}</li>;
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
