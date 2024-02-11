import { intervalToDuration } from "date-fns";

export function getDuration(runtime: number) {
  const dur = intervalToDuration({ start: 0, end: runtime * 60 * 1000 });
  return [dur.hours, "h ", dur.minutes, "m"].join("");
}
