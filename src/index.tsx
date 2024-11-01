import { render } from "react-dom";

import Counter from "./components/Counter/Counter";

const domNode = document.getElementById("root");

render(<Counter />, domNode);
