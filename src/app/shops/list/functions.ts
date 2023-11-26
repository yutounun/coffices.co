export function stars(rate: number) {
  let stars = "";
  for (let i = 0; i < rate; i++) {
    stars += "★";
  }
  return stars;
}
