import UAParser, { IResult } from "ua-parser-js";
let device: IResult;
export function getDevice() {
    if (!window.navigator?.userAgent) {
        return null;
    }
    if (!device) {
        device = new UAParser(window.navigator.userAgent).getResult();
    }
    return device;
}

const bps = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
};

type BreakpointKey = keyof typeof bps;
export type Breakpoint = {
    [K in BreakpointKey]: string;
};

const up: Breakpoint = Object.entries(bps).reduce((prev, [key, val]) => {
    prev[key] = `@media (min-width: ${val + 1}px)`;
    return prev;
}, {} as any);

const down: Breakpoint = Object.entries(bps).reduce((prev, [key, val]) => {
    prev[key] = `@media (max-width: ${val}px)`;
    return prev;
}, {} as any);

export function bp(min: BreakpointKey, max: BreakpointKey) {
    return `@media (min-width: ${bps[min] + 1}px) and (max-width: ${bps[max]}px)`;
}

bp.up = up;
bp.down = down;
