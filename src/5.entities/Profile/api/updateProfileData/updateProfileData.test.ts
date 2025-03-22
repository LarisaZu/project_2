import { updateProfileData } from "./updateProfileData";
import { TestAsyncThunk } from "6.shared/lib/tests/testAsyncThunk/testAsyncThunk";
import { ECurrency } from "../../../Currency";
import { ECountry } from "../../../Country";
import { EValidateProfileError } from "../../model/types/profile";

const data = {
  id: "1",
  firstName: "Homer",
  lastName: "Simpson",
  age: 45,
  country: ECountry.USA,
  currency: ECurrency.USD,
  city: "New York",
  username: "admin",
};

/* с классом TestAsyncThunk */
describe("updateProfileData", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { formData: data },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk("1");

    if (!result) {
      throw Error();
    }

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("server error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { formData: data },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([EValidateProfileError.SERVER_ERROR]);
  });

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { formData: { ...data, firstName: "" } },
    });
    const result = await thunk.callThunk("1");

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([EValidateProfileError.INCORRECT_USER_DATA]);
  });
});
