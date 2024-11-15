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

export interface StoreI {
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
}

export const dummyStores: StoreI[] = [
  {
    place_id: "place_1",
    name: "Coffee Paradise",
    formatted_address: "123 Main St, Vancouver, BC",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 400,
        width: 600,
        html_attributions: ["Photo by Coffee Paradise"],
      },
    ],
    rating: 4.5,
    user_ratings_total: 120,
    geometry: {
      location: {
        lat: 49.2827,
        lng: -123.1207,
      },
    },
    types: ["cafe", "restaurant"],
  },
  {
    place_id: "place_2",
    name: "Brewed Awakening",
    formatted_address: "456 Oak Ave, Vancouver, BC",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 300,
        width: 500,
        html_attributions: ["Photo by Brewed Awakening"],
      },
    ],
    rating: 4.0,
    user_ratings_total: 80,
    geometry: {
      location: {
        lat: 49.29,
        lng: -123.13,
      },
    },
    types: ["cafe", "bakery"],
  },
  {
    place_id: "place_3",
    name: "Latte Land",
    formatted_address: "789 Pine Rd, Vancouver, BC",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 450,
        width: 600,
        html_attributions: ["Photo by Latte Land"],
      },
    ],
    rating: 4.8,
    user_ratings_total: 200,
    geometry: {
      location: {
        lat: 49.275,
        lng: -123.1,
      },
    },
    types: ["cafe", "dessert"],
  },
  {
    place_id: "place_4",
    name: "Espresso Express",
    formatted_address: "101 Maple St, Vancouver, BC",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 500,
        width: 700,
        html_attributions: ["Photo by Espresso Express"],
      },
    ],
    rating: 3.9,
    user_ratings_total: 50,
    geometry: {
      location: {
        lat: 49.28,
        lng: -123.11,
      },
    },
    types: ["cafe"],
  },
  {
    place_id: "place_5",
    name: "Mocha Moments",
    formatted_address: "202 Birch Dr, Vancouver, BC",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 350,
        width: 550,
        html_attributions: ["Photo by Mocha Moments"],
      },
    ],
    rating: 4.2,
    user_ratings_total: 95,
    geometry: {
      location: {
        lat: 49.285,
        lng: -123.115,
      },
    },
    types: ["cafe", "breakfast"],
  },
  {
    place_id: "place_21",
    name: "Coffee Paradise",
    formatted_address: "123 Main St, Vancouver, BC",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 400,
        width: 600,
        html_attributions: ["Photo by Coffee Paradise"],
      },
    ],
    rating: 4.5,
    user_ratings_total: 120,
    geometry: {
      location: {
        lat: 49.2827,
        lng: -123.1207,
      },
    },
    types: ["cafe", "restaurant"],
  },
  {
    place_id: "place_22",
    name: "Brewed Awakening",
    formatted_address: "456 Oak Ave, Vancouver, BC",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 300,
        width: 500,
        html_attributions: ["Photo by Brewed Awakening"],
      },
    ],
    rating: 4.0,
    user_ratings_total: 80,
    geometry: {
      location: {
        lat: 49.29,
        lng: -123.13,
      },
    },
    types: ["cafe", "bakery"],
  },
  {
    place_id: "place_23",
    name: "Latte Land",
    formatted_address: "789 Pine Rd, Vancouver, BC",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 450,
        width: 600,
        html_attributions: ["Photo by Latte Land"],
      },
    ],
    rating: 4.8,
    user_ratings_total: 200,
    geometry: {
      location: {
        lat: 49.275,
        lng: -123.1,
      },
    },
    types: ["cafe", "dessert"],
  },
  {
    place_id: "place_24",
    name: "Espresso Express",
    formatted_address: "101 Maple St, Vancouver, BC",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 500,
        width: 700,
        html_attributions: ["Photo by Espresso Express"],
      },
    ],
    rating: 3.9,
    user_ratings_total: 50,
    geometry: {
      location: {
        lat: 49.28,
        lng: -123.11,
      },
    },
    types: ["cafe"],
  },
  {
    place_id: "place_25",
    name: "Mocha Moments",
    formatted_address: "202 Birch Dr, Vancouver, BC",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 350,
        width: 550,
        html_attributions: ["Photo by Mocha Moments"],
      },
    ],
    rating: 4.2,
    user_ratings_total: 95,
    geometry: {
      location: {
        lat: 49.285,
        lng: -123.115,
      },
    },
    types: ["cafe", "breakfast"],
  },
  {
    place_id: "place_11",
    name: "Coffee Paradise",
    formatted_address: "123 Main St, Vancouver, BC",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 400,
        width: 600,
        html_attributions: ["Photo by Coffee Paradise"],
      },
    ],
    rating: 4.5,
    user_ratings_total: 120,
    geometry: {
      location: {
        lat: 49.2827,
        lng: -123.1207,
      },
    },
    types: ["cafe", "restaurant"],
  },
  {
    place_id: "place_12",
    name: "Brewed Awakening",
    formatted_address: "456 Oak Ave, Vancouver, BC",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 300,
        width: 500,
        html_attributions: ["Photo by Brewed Awakening"],
      },
    ],
    rating: 4.0,
    user_ratings_total: 80,
    geometry: {
      location: {
        lat: 49.29,
        lng: -123.13,
      },
    },
    types: ["cafe", "bakery"],
  },
  {
    place_id: "place_13",
    name: "Latte Land",
    formatted_address: "789 Pine Rd, Vancouver, BC",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 450,
        width: 600,
        html_attributions: ["Photo by Latte Land"],
      },
    ],
    rating: 4.8,
    user_ratings_total: 200,
    geometry: {
      location: {
        lat: 49.275,
        lng: -123.1,
      },
    },
    types: ["cafe", "dessert"],
  },
  {
    place_id: "place_14",
    name: "Espresso Express",
    formatted_address: "101 Maple St, Vancouver, BC",
    opening_hours: {
      open_now: false,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 500,
        width: 700,
        html_attributions: ["Photo by Espresso Express"],
      },
    ],
    rating: 3.9,
    user_ratings_total: 50,
    geometry: {
      location: {
        lat: 49.28,
        lng: -123.11,
      },
    },
    types: ["cafe"],
  },
  {
    place_id: "place_15",
    name: "Mocha Moments",
    formatted_address: "202 Birch Dr, Vancouver, BC",
    opening_hours: {
      open_now: true,
    },
    photos: [
      {
        photo_reference:
          "https://www.luxcafeclub.com/cdn/shop/articles/Minimalist_Modern_Coffee_Shop_1_1100x.png?v=1713243107",
        height: 350,
        width: 550,
        html_attributions: ["Photo by Mocha Moments"],
      },
    ],
    rating: 4.2,
    user_ratings_total: 95,
    geometry: {
      location: {
        lat: 49.285,
        lng: -123.115,
      },
    },
    types: ["cafe", "breakfast"],
  },
];
