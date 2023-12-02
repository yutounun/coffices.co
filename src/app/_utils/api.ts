import type { PutBlobResult } from "@vercel/blob";

export function getCafe() {
  return fetch("http://localhost:9000/cafe")
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
export async function postCafe(data) {
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
