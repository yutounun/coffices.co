import type { PutBlobResult } from "@vercel/blob";
import { CafePostRequestI, CafePutRequestI } from "types/cafes";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Retrieves cafe data from the server.
 *
 * @return {Promise<any>} A promise that resolves to the cafe data.
 */
export async function getCafe() {
  return await fetch(`${API_URL}/cafe`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

/**
 * Retrieves cafe data from the server based on the specified station name.
 *
 * @param {string} stationName - The name of the station to filter cafe data by.
 * @return {Promise} A Promise that resolves to the cafe data fetched from the server.
 */
export function filterCafe(stationName: string) {
  return fetch(`${API_URL}/cafe?station=${stationName}`)
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
  return await fetch(`${API_URL}/cafe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

/**
 * Sends a PUT request to the server to update a cafe's data.
 *
 * @param {CafePutRequestI} data - The data to be sent in the request body.
 * @return {Promise<any>} A Promise that resolves to the JSON response from the server, or logs an error if the request fails.
 */
export async function putCafe(data: CafePutRequestI) {
  return await fetch(`${API_URL}/cafe/${data._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => console.log(err));
}

export async function deleteCafe(cafeId: string | number) {
  return await fetch(`${API_URL}/cafe/${cafeId}`, {
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
