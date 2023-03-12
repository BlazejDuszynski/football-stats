import React, { Fragment, useContext } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import classes from "./Dropdown.module.css";
import DropdownItem from "./DropdownItem";
import SquadContext from "../Store/squad-context";

const Dropdown = () => {
  const squadCtx = useContext(SquadContext);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "72cff716cdmshc41548afe41ba07p18c95cjsn9521d9d88440",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  async function onDropdownSubmit() {
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/players?team=33&season=" +
        squadCtx.season.substring(0, 4),
      options
    );
    const teamSquad = await response.json();
    console.log(teamSquad);
  }

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
                season={season}
                onClick={squadCtx.selectSeasonHandler}
              />
            );
          })}
        </ul>
      </div>
      <button className={classes.button} onClick={onDropdownSubmit}>
        Search
      </button>
    </Fragment>
  );
};

export default Dropdown;
