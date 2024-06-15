export interface SwiperItemType {
  image: string;
  title?: string;
  subTitle?: string;
  desc?: string;
  url?: string;
}

export interface PartnerType {
  name: string;
  desc: string;
  image?: string;
}

export interface GenericType<T> {
  items: T[];
  selectedItem?: T;
}
