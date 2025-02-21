import { ResponseBase } from '../type';

export interface ResponseGetCarousel extends ResponseBase {
  data: CarouselItem[];
}
export type CarouselItem = {
  _id?: string;
  title: string;
  subtitle: string;
  desc: string;
  img_url?: string;
  buttons?: button[];
  createdAt?: string;
  updatedAt?: string;
};

export type button = {
  color: string;
  text: string;
  url: string;
};
