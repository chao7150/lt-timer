import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import { observableTimeStore } from "./stores/TimeStore";

ReactDOM.render(
  <App store={observableTimeStore} />,
  document.getElementById("example")
);
