import axios from "axios";

import { USER_LOCALSTORAGE_KEY } from "6.shared/const/localstorage";

console.log("🚀 ~ __API__:", __API__);
export const $api = axios.create({
  baseURL: __API__,
  headers: { authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || "" },
});
