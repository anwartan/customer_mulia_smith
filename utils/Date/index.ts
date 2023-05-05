export function formatDateFromMilliseconds(milliseconds: number): string {
  const date = new Date(milliseconds);
  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
