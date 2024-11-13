import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve, reject) => {
      setTimeout(
        () =>
          // @ts-ignore
          resolve(import("./MainPage")),
        1500
      );
    })
);
