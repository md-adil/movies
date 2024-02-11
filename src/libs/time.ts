import { formatDistance } from "date-fns";

export function getDuration(runtime: number) {
  return formatDistance(0, runtime * 60 * 1000, { includeSeconds: true });
}
