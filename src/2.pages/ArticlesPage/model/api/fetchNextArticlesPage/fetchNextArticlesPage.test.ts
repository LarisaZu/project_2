import { fetchArticles } from "../fetchArticles/fetchArticles";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { TestAsyncThunk } from "6.shared/lib/tests/testAsyncThunk/testAsyncThunk";

jest.mock("../fetchArticles/fetchArticles");

/* с классом TestAsyncThunk */
describe("fetchNextArticlesPage", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        isLoading: false,
        limit: 5,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalledWith({ page: 3 });
  });

  test("fetchNextArticlesPage not called", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        isLoading: false,
        limit: 5,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
  test("fetchNextArticlesPage not called isLoading", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        isLoading: true,
        limit: 5,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
