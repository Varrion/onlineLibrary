import {Issue} from "./Issue";
import {UserRole} from "./UserRole";

export class User {
  id: number;

  username: string;

  password: string;

  name: string;

  surname: string;

  phone: string;

  address: string;

  email: string;

  active: boolean;

  issue: Issue;

  role: UserRole;
}
