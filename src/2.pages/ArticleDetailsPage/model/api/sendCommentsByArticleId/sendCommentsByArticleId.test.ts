import { sendCommentsByArticleId } from "./sendCommentsByArticleId";
import { TestAsyncThunk } from "6.shared/lib/tests/testAsyncThunk/testAsyncThunk";

import { IUser } from "5.entities/User";

const comment = {
  text: "Hello world",
  articleId: "1",
};
const user: IUser = { id: "1", username: "Petr" };

/* с классом TestAsyncThunk */
describe("sendCommentsByArticleId", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(sendCommentsByArticleId, {
      user: { authData: user },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));

    const result = await thunk.callThunk(comment);

    if (!result) {
      throw Error();
    }

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(comment);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(sendCommentsByArticleId, {
      user: { authData: user },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(comment);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("Ошибка при отправке комментария");
  });
});
