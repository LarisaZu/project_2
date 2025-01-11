import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          // @ts-expect-error: Unreachable code error
          resolve(import("./AboutPage")),
        1500
      );
    })
);
