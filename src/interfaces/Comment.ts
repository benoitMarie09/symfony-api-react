import { ApiResource } from "../utils/types";

export interface Comment extends ApiResource {
  content?: string;
  article?: string;
  createdAt?: string;
}
