import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import { App } from "./App";
import registerServiceWorker from "./registerServiceWorker";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }
`;

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
registerServiceWorker();
