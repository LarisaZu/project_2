import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import "./styles/index.scss";
import ThemeProvider from "./theme/ThemeProvider";

const domNode = document.getElementById("root");

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  domNode
);
