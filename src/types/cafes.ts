export interface ReviewI {
  id: string;
  title: string;
  content: string;
  userId: string;
  rate: number;
  createdAt: string;
  updatedAt: string;
  image: string;
  name: string;
}

export interface CreateReviewRequestI {
  title: string;
  content: string;
  rate: number;
  cafeId: string;
}

export interface CafeI {
  _id: string;
  id: number | string;
  title: string;
  rate: number;
  image: string;
  area: string;
  station: string;
  openHour: string;
  closeHour: string;
  isWifi: boolean;
  isSmoking: boolean;
  isOutlet: boolean;
  reviews: ReviewI[];
}

export interface CafePostRequestI {
  title: string;
  image: string;
  area: string;
  openHour: string;
  closeHour: string;
  isWifi: boolean | string;
  isSmoking: boolean | string;
  isOutlet: boolean | string;
  station: string;
  reviews: CreateReviewRequestI[];
}

export interface CafePutRequestI {
  _id: string;
  id: string | number;
  title: string;
  image: string;
  area: string;
  openHour: string;
  closeHour: string;
  isWifi: boolean | string;
  isSmoking: boolean | string;
  isOutlet: boolean | string;
  station: string;
}

export interface CafeGetResponseI {
  _id: string;
  id: number;
  title: string;
  rate: number;
  image: string;
  area: string;
  openHour: string;
  closeHour: string;
  isWifi: boolean | string;
  isSmoking: boolean | string;
  isOutlet: boolean | string;
  station: string;
}
