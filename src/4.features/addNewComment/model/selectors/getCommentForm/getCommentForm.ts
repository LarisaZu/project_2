import { IStateSchema } from "1.app/providers/StoreProvider";

export const getCommentFormText = (state: IStateSchema) =>
  state.commentForm?.text || "";
export const getCommentFormError = (state: IStateSchema) =>
  state.commentForm?.error;
