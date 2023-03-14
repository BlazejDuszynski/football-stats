import React, { Fragment, useContext } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import classes from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem";
import SquadContext from "../Store/squad-context";

const Dropdown = () => {
  const squadCtx = useContext(SquadContext);

  return (
    <Fragment>
      <div className={classes.dropdown}>
        <div className={classes.select} onClick={squadCtx.toggleDropdown}>
          <span className={classes.selection}>{squadCtx.season}</span>
          <ArrowDropDownIcon
            className={
              squadCtx.dropdownActive
                ? classes.arrowIconRotated
                : classes.arrowIcon
            }
          />
        </div>
        <ul
          className={
            squadCtx.dropdownActive ? classes.menu__active : classes.menu
          }
        >
          {squadCtx.seasons.map((season) => {
            return (
              <DropdownItem
                key={Math.random()}
                season={season}
                onClick={squadCtx.selectSeasonHandler}
              />
            );
          })}
        </ul>
      </div>
      <button className={classes.button} onClick={squadCtx.fetchSquadHandler}>
        Search
      </button>
    </Fragment>
  );
};

export default Dropdown;
