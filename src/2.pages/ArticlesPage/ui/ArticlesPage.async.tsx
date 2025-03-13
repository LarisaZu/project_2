import { lazy } from "react";

export const ArticlesPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          // @ts-expect-error: Unreachable code error
          resolve(import("./ArticlesPage")),
        1500
      );
    })
);
