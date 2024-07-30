/**
 * Extract hour and minute from datetime string
 *
 * @param datetimeStr datetime string in format "YYYY-MM-DD HH:mm:ss"
 * @example "2022-01-01 10:00:00"
 * @returns datetime string in format "HH:mm"
 */
export function extractHourMinute(datetimeStr: string) {
  const datetimeObj = new Date(datetimeStr);
  const hours = datetimeObj.getHours().toString().padStart(2, "0");
  const minutes = datetimeObj.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
