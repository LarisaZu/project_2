import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";
import { TestAsyncThunk } from "6.shared/lib/tests/testAsyncThunk/testAsyncThunk";

import { IComment } from "5.entities/Comment";

const data: IComment[] = [
  {
    id: "1",
    text: "some comment",
    user: { id: "1", username: "Vasya" },
  },
  {
    id: "2",
    text: "some comment 2",
    user: { id: "2", username: "Petr I" },
  },
];

/* с классом TestAsyncThunk */
describe("fetchCommentsByArticleId", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk("1");

    if (!result) {
      throw Error();
    }

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("ошибка получения комментариев");
  });
});
