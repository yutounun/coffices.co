export function getCafe() {
  return fetch("http://localhost:9000/cafe")
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

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
