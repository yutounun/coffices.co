import { locationObjI } from "@/types/GooglePlacesTypes";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function searchCafeOnGoogle(
  currentLocation?: null | locationObjI,
  location?: string
) {
  return await fetch(`${API_URL}/api/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentLocation, location }),
  })
    .then((res) => {
      const data = res.json();
      console.log("🚀 ~ .then ~ data:", data);
      return data;
    })
    .catch((err) => console.log(err));
}

export const getAnalytics = async (placeId: string) => {
  try {
    const response = await fetch(`${API_URL}/api/analytics/${placeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    throw error;
  }
};
