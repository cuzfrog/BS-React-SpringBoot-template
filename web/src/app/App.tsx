import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import classes from "./App.scss";

export function App(): JSX.Element {

  return (
    <Router>
      <div className={classes.layoutContainer}>
        <div className={classes.content}></div>
      </div>
    </Router>
  );
}
