export interface locationObjI {
  lat: number;
  lng: number;
}
export interface PlacePhotoI {
  photo_reference: string;
  height: number;
  width: number;
  html_attributions: string[];
}

export interface ReviewI {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

export interface CafeDetailI {
  place_id: string;
  name: string;
  formatted_address: string;
  opening_hours?: {
    open_now: boolean;
  };
  photos?: PlacePhotoI[];
  rating?: number;
  user_ratings_total?: number;
  geometry?: {
    location: {
      lat: number;
      lng: number;
    };
  };
  types?: string[];
  reviews: ReviewI[];
}
