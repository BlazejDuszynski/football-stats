import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./PlayerModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const PlayerOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const PlayerModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <PlayerOverlay>{props.children}</PlayerOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default PlayerModal;
