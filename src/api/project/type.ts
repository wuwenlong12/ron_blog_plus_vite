import { PartialBlock } from '@blocknote/core';
import { ResponseBase } from '../type';

export interface ResponseGetProject extends ResponseBase {
  data: ProjectItem[];
}
export interface ProjectItem {
  _id: string;
  img_url: string;
  title: string;
  category: string;
  button_url: string;
  content?: PartialBlock[];
  likes: number;
  createdAt: string;
  updatedAt: string;
}
