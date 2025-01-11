import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          // @ts-expect-error: Unreachable code error
          resolve(import("./MainPage")),
        1500
      );
    })
);
