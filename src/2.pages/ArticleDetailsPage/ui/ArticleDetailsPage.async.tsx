import { lazy } from "react";

export const ArticleDetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          // @ts-expect-error: Unreachable code error
          resolve(import("./ArticleDetailsPage")),
        1500
      );
    })
);
