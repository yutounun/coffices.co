import { CafeDetailI } from "@/types/GooglePlacesTypes";

export const dummyCafeAnalysisIData = {
  _id: "cafe123",
  name: "Cafe Loft",
  open_now: true,
  place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4",
  address: "123 Coffee St, Vancouver, BC",
  photo_ref: "CnRnAAAAMl0vZ7eF2xZ3m1...",
  rating: 4.3,
  wifi: {
    wifi_available: "true",
    confidence: 72,
  },
  work: {
    suitable_for_work: "true",
    confidence: 60,
  },
  coffee_price: {
    min_coffee_price: "3.5",
    confidence: 97,
  },
  plug: {
    plug_available: "true",
    confidence: 63,
  },
  ai_analysis:
    "The cafe is well-rated for a quiet atmosphere and WiFi availability.",
  important_reviews: [
    "Great for remote work! The WiFi is reliable, and there are plenty of seats.",
    "Good coffee with $3.5, but not much in terms of plug availability.",
    "Nice atmosphere, but it can get a bit crowded during peak hours.",
  ],
};

export const dummyStores: CafeDetailI[] = [
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
