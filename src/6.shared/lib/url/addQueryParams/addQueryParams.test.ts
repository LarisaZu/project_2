import { getQueryParams } from "./addQueryParams";

describe("addQueryParams.test", () => {
  test("test with one params", () => {
    const params = getQueryParams({ search: "test" });

    expect(params).toBe("?search=test");
  });

  test("test with two params", () => {
    const params = getQueryParams({ search: "test", type: "IT" });

    expect(params).toBe("?search=test&type=IT");
  });

  test("test with undefined", () => {
    const params = getQueryParams({ search: "test", type: undefined });

    expect(params).toBe("?search=test");
  });
});
