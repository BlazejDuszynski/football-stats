import classes from "./AppHeader.module.css";

function AppHeader(props) {
  return (
    <div className={classes.appHeader}>
      <div className={classes.logo}></div>
      <div className={classes.text}>
        <h1>Welcome to Manchester United Football Club stats center</h1>
        <h2>
          Find the most accurate players statistics from Premier League!
        </h2>
      </div>
    </div>
  );
}

export default AppHeader;
