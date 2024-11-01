import { useState } from "react";
import cls from "./Counter.module.scss";

export const Counter = () => {
  const [state, setState] = useState(0);
  return (
    <>
      <h1>{state}</h1>
      <button className={cls.btn} onClick={() => setState((prev) => prev + 1)}>
        +
      </button>
    </>
  );
};
