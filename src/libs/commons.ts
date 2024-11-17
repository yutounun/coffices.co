export const photoUrl = (photoRef?: string) => {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY}`;
};
