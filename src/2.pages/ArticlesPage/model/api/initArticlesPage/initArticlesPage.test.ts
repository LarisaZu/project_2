import { fetchArticles } from "../fetchArticles/fetchArticles";
import { initArticlesPage } from "./initArticlesPage";
import { TestAsyncThunk } from "6.shared/lib/tests/testAsyncThunk/testAsyncThunk";

jest.mock("../fetchArticles/fetchArticles");

describe("initArticlesPage", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 1,
        ids: [],
        entities: {},
        isLoading: false,
        limit: 5,
        hasMore: true,
        _inited: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalledWith({ page: 1 });
  });

  test("initArticlesPage not called", async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        isLoading: false,
        limit: 5,
        hasMore: true,
        _inited: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
