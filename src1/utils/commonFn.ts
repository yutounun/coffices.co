import { Dayjs } from "dayjs";

export function extractHourMinute(datetime: Dayjs | null) {
  if (!datetime) {
    return "";
  }
  const datetimeObj = new Date(datetime.toDate());
  const hours = datetimeObj.getHours().toString().padStart(2, "0");
  const minutes = datetimeObj.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
