import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import data from "./data";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App data={data} />, document.getElementById("root"));
registerServiceWorker();
