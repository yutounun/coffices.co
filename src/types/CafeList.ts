export interface CafeI {
  placeId: string;
  name: string;
  formatted_address: string;
  open_now?: boolean;
  photoRef?: string;
  useRatingsTotal?: number;
  rating?: number;
}
