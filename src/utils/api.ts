import type { PutBlobResult } from "@vercel/blob";
import {
  CafePostRequestI,
  CafePutRequestI,
  CreateReviewRequestI,
} from "@/types/cafes";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Retrieves all cafe information from the server.
 *
 * @return {Promise<any[]>} A promise that resolves to the array of cafe data.
 */
export async function fetchAllCafes() {
  return await fetch(`${API_URL}/api/cafe`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

/**
 * Retrieves information for a specific cafe by ID from the server.
 *
 * @param {string} cafeId - The ID of the cafe to retrieve.
 * @return {Promise<any>} A promise that resolves to the cafe data.
 */
export async function fetchCafeById(cafeId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/cafe/${cafeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("🚀 ~ fetchCafeById ~ data:", data);
    return data;
  } catch (error) {
    console.error("🚀 ~ fetchCafeById ~ error:", error);
    return null;
  }
}

/**
 * Retrieves cafe data from the server based on the specified station name.
 *
 * @param {string} stationName - The name of the station to filter cafe data by.
 * @return {Promise} A Promise that resolves to the cafe data fetched from the server.
 */
export function filterCafe(q: string) {
  return fetch(`${API_URL}/api/cafe?q=${q}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

/**
 * postCafe - post cafe data to backend
 *
 * @param data - posted cafe data
 * @returns - cafe data list
 * @throws - error
 */
export async function postCafe(data: CafePostRequestI) {
  try {
    const response = await fetch(`${API_URL}/api/cafe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error ${response.status}: ${errorData.error}`);
    }

    return await response.json();
  } catch (err) {
    console.log("err: ", err);
    throw err;
  }
}

/**
 * Sends a PUT request to the server to update a cafe's data.
 *
 * @param {CafePutRequestI} data - The data to be sent in the request body.
 * @return {Promise<any>} A Promise that resolves to the JSON response from the server, or logs an error if the request fails.
 */
export async function putCafe(data: CafePutRequestI) {
  try {
    const response = await fetch(`${API_URL}/api/cafe/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error ${response.status}: ${errorData.error}`);
    }
    return await response.json();
  } catch (err) {
    throw err;
  }
}

export async function deleteCafe(cafeId: string | number) {
  return await fetch(`${API_URL}/api/cafe/${cafeId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export async function getStationsInTokyo() {
  return await fetch("http://api.ekispert.jp/v1/json/station")
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

/**
 * Handles the submission of a cafe image.
 *
 * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
 */
export async function cafeImageUpload(cafeImageFile: any) {
  if (!cafeImageFile) return;
  const response = await fetch(
    `/api/cafe/upload?filename=${cafeImageFile?.name}`,
    {
      method: "POST",
      body: cafeImageFile,
    }
  );

  return (await response.json()) as PutBlobResult;
}

export async function addReview(data: CreateReviewRequestI) {
  console.log("🚀 ~ addReview ~ data:", data);
  return await fetch(`${API_URL}/api/review`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export async function getUser(sessionId: string) {
  return await fetch(`${API_URL}/api/user?sessionId=${sessionId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export async function updateUser(data: string) {
  return await fetch(`${API_URL}/api/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
export async function searchCafeOnGoogle() {
  console.log("knock!");
  return await fetch(`${API_URL}/api/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
