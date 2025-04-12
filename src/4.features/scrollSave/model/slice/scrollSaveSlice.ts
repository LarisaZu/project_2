import { TScrollSchema } from "./../types/scrollSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialScrollState: TScrollSchema = {};

export const scrollSaveSlice = createSlice({
  name: "scroll",
  initialState: initialScrollState,
  reducers: {
    setScroll: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      state[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollSaveActions, reducer: scrollSaveReducer } =
  scrollSaveSlice;
