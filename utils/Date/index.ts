import { DateTimeFormatOptions } from "intl";

export function formatDateFromMilliseconds(milliseconds: number): string {
  const options: DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(milliseconds);

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedDate;
}
