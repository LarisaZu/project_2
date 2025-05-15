import { createSelector } from "@reduxjs/toolkit";

import { IStateSchema } from "1.app/providers/StoreProvider";

export const getScroll = (state: IStateSchema) => state.scroll;

export const getScrollByPath = createSelector(
  getScroll,
  (state: IStateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
