import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import "./index.scss";
const domNode = document.getElementById("root");

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  domNode
);
