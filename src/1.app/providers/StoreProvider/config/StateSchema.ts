import { ILoginFormSchema } from "4.features/AuthByUsername";
import { IUserSchema } from "5.entities/User";

export interface IStateSchema {
  user: IUserSchema;
  loginForm: ILoginFormSchema;
}
