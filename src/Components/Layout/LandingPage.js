import React from "react";
import classes from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={classes.landingPage}>
      <nav className={classes.navbar}>
        <a className={classes.navbarItem}>Login</a>
        <a className={classes.navbarItem}>Get started
        </a>
      </nav>
      <div className={classes.content}>
        <h1 className={classes.mainHeader}>
          Application with football statistics
        </h1>
        <h2 className={classes.secondaryHeader}>
          Find the most accurate statistics from English Premier League from
          seasons 2008/2009 - 2020/2021 including played games, goals, assists!
        </h2>
        <button className={classes.getStartedButton}>Get started</button>
      </div>
    </div>
  );
}

export default LandingPage;
