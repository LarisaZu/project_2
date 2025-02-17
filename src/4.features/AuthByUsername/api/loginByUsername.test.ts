import { loginByUsername } from "./loginByUsername";
import { userActions } from "5.entities/User";
import { TestAsyncThunk } from "6.shared/lib/tests/testAsyncThunk/testAsyncThunk";

// describe("loginByUsername", () => {
//   let dispatch: Dispatch;
//   let getState: () => IStateSchema;

//   //перед каждым тестом будем мокать dispatch и getState
//   beforeEach(() => {
//     dispatch = jest.fn();
//     getState = jest.fn();
//   });

//   test("login success", async () => {
//     const authData = { username: "123", id: "1" };

//     mockedAxios.post.mockReturnValue(Promise.resolve({ data: authData }));
//     /*  loginByUsername = это функция createAsyncThunk, она создает какой-то асинхронный Thunk,
//     какой-то action. Потом action вызываем и получаем result - это Promise
//      */
//     const action = loginByUsername({ password: "123", username: "123" });
//     const result = await action(dispatch, getState, undefined);

//     expect(dispatch).toHaveBeenCalledWith(
//       userActions.setUserAuthData(authData)
//     );
//     expect(dispatch).toHaveBeenCalledTimes(3);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe("fulfilled");
//     expect(result.payload).toEqual(authData);
//   });

//   test("login error", async () => {
//     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

//     const action = loginByUsername({ password: "123", username: "123" });
//     const result = await action(dispatch, getState, undefined);

//     expect(dispatch).toHaveBeenCalledTimes(2);
//     expect(mockedAxios.post).toHaveBeenCalled();
//     expect(result.meta.requestStatus).toBe("rejected");
//     expect(result.payload).toBe("ошибка");
//   });
// });

/* с классом TestAsyncThunk */
describe("loginByUsername", () => {
  test("login success", async () => {
    const authData = { username: "123", id: "1" };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: authData }));
    const result = await thunk.callThunk({ password: "123", username: "123" });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setUserAuthData(authData)
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(authData);
  });

  test("login error", async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ password: "123", username: "123" });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("ошибка");
  });
});
