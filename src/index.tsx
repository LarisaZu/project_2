import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "1.app/App";
import { ThemeProvider } from "1.app/providers/ThemeProvider";
import { ErrorBoundary } from "1.app/providers/ErrorBoundary";
import { StoreProvider } from "1.app/providers/StoreProvider";

import "1.app/styles/index.scss";
import "6.shared/config/i18/i18n";

const domNode = document.getElementById("root");

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  domNode
);
