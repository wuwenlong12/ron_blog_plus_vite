import { ResponseBase } from '../type';

export interface ResponseGetTag extends ResponseBase {
  data: tag[];
}
export type tag = {
  _id: string;
  name: string;
  color: string;
};
