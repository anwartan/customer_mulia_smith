export function formatDateFromMilliseconds(milliseconds: number): string {
  const date = new Date(milliseconds);

  const formattedDate = new Intl.DateTimeFormat("en-US").format(date);

  return formattedDate;
}
