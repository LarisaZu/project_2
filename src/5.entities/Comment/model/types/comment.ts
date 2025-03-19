import { IUser } from "5.entities/User";

export interface IComment {
  id: string;
  user: IUser;
  text: string;
}
