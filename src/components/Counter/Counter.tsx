import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => setState((prev) => prev + 1)}>+</button>
    </>
  );
};

export default Counter;
