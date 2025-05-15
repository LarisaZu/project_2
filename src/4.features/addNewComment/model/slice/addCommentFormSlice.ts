import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAddCommentFormSchema } from "../types/addCommentForm";

export const initialCommentFormState: IAddCommentFormSchema = {
  text: "",
};

export const addCommentFormSlice = createSlice({
  name: "commentForm",
  initialState: initialCommentFormState,
  reducers: {
    setComment: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  // },
});

export const { actions: commentFormActions, reducer: commentFormReducer } =
  addCommentFormSlice;
