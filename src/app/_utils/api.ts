import type { PutBlobResult } from "@vercel/blob";
import { CafePostRequestI } from "types/cafes";

/**
 * Retrieves cafe data from the server.
 *
 * @return {Promise<any>} A promise that resolves to the cafe data.
 */
export function getCafe() {
  return fetch(`http://localhost:9000/cafe`)
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
  return fetch(`http://localhost:9000/cafe?station=${stationName}`)
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
  return await fetch("http://localhost:9000/cafe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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
  const response = await fetch(
    `/api/cafe/upload?filename=${cafeImageFile?.name}`,
    {
      method: "POST",
      body: cafeImageFile,
    }
  );

  return (await response.json()) as PutBlobResult;
}
