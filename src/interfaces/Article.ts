import { ApiResource } from "../utils/types";

export interface Article extends ApiResource {
  title?: string;
  content?: string;
  tags?: any;
  slug?: string;
  isPublished?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
  comments?: any;
  author?: any;
}
