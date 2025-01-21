import { ICounterSchema } from "5.entities/Counter";
import { IUserSchema } from "5.entities/User";

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
}
