import { intervalToDuration } from "date-fns";

export function getDuration(runtime: number) {
    const i = intervalToDuration({ start: 0, end: runtime * 60 * 1000 });
    return `${i.hours}:${i.minutes}:${i.seconds}`;
}
