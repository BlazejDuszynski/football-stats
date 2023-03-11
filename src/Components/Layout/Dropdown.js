import React, { Fragment, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import classes from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem";
import Button from "../UI/Button";

const Dropdown = () => {
  const [isDropdownActive, setIsDropDownActive] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState("");

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

  const selectSeasonHandler = (season) => {
    setSelectedSeason(season);
    setIsDropDownActive(false);
  };

  return (
    <Fragment>
      <div className={classes.dropdown}>
        <div className={classes.select} onClick={activateDropdownHandler}>
          <span className={classes.selection}>{selectedSeason}</span>
          <ArrowDropDownIcon
            className={
              isDropdownActive ? classes.arrowIconRotated : classes.arrowIcon
            }
          />
        </div>
        <ul className={isDropdownActive ? classes.menu__active : classes.menu}>
          {seasons.map((season) => {
            return (
              <DropdownItem season={season} onClick={selectSeasonHandler} />
            );
          })}
        </ul>
      </div>
      <Button />
    </Fragment>
  );
};

export default Dropdown;
