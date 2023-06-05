import { ApiResource } from "../utils/types";

export interface User extends ApiResource {
  email?: string;
  plainPassword?: string;
  username?: string;
  name?: string;
  articles?: any;
}
