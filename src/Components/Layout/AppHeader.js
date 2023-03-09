import classes from "./AppHeader.module.css";

function AppHeader(props) {
  return (
    <div className={classes.appHeader}>
      <div className={classes.logo}></div>
      <div className={classes.text}>
        <h1>Welcome to Manchester United Football Club stats center!</h1>
        <h2>
          Find the most accurate players statistics across Premier League
          seasons from 2008/2009 to 2020/2021.
        </h2>
      </div>
    </div>
  );
}

export default AppHeader;
