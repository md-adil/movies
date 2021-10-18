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
