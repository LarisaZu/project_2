import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "1.app/App";
import "1.app/styles/index.scss";
import { ThemeProvider } from "1.app/providers/ThemeProvider/ui/ThemeProvider";

const domNode = document.getElementById("root");

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  domNode
);
