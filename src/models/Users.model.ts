import { BaseModel } from "./baseModel";

export interface UserModel extends BaseModel {
  name: string;
  role: string;
}
