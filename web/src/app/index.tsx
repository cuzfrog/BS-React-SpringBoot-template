import React from "react";
import ReactDOM from "react-dom";
import { AppContextProvider } from "./state";
import { App } from "./App";

ReactDOM.render(
  <AppContextProvider><App /></AppContextProvider>,
  (document.getElementById("root") as HTMLElement)
);

console.log("App rendered!");
