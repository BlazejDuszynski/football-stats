import React, { Fragment } from "react";
import classes from "./DropdownPlayerWindow.module.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropdownItemPlayerWindow from "./DropdownItemPlayerWindow";
import { useContext } from "react";
import SquadContext from "../../Store/squad-context";

const DropdownPlayerWindow = () => {
  const squadCtx = useContext(SquadContext);
  console.log(squadCtx.season);
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
              <DropdownItemPlayerWindow
                key={Math.random()}
                season={season}
                onClick={squadCtx.selectSeasonHandler}
              />
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default DropdownPlayerWindow;
