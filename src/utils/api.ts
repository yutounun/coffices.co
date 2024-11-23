import connectDB from "@/libs/connectDB";
import { locationObjI } from "@/types/GooglePlacesTypes";
import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Search for a cafe on Google Places API
 * @param currentLocation
 * @param location
 * @returns
 */
export async function searchCafeOnGoogle(
  currentLocation?: null | locationObjI,
  location?: string
) {
  await connectDB();
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

export async function findDetailCafeInfo(placeId: string) {
  console.log("🚀 ~ findDetailCafeInfo ~ placeId:", placeId);
  await connectDB();
  const res = await fetch(`${API_URL}/api/search/${placeId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const detail = await res.json();
  return detail.result;
}

/**
 * Get analytics data for a place from MongoDB
 * @param placeId
 * @returns
 */
export const getAnalytics = async (placeId: string) => {
  await connectDB();
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
