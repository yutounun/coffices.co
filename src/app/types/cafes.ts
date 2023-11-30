export interface CafeI {
  id: number;
  title: string;
  rate: number;
  image: string;
  area: string;
  station: string;
  openHour: string;
  closeHour: string;
  isWifi: boolean | string;
  isSmoking: boolean;
  isOutlet: boolean;
}

export interface CafePostRequestI {
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

export interface CafeGetResponseI {
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
