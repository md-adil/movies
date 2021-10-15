import { IList, ITitle } from "./interfaces";
import qs, { ParsedUrlQuery } from "querystring";

export async function fetchList(query: ParsedUrlQuery): Promise<IList> {
    const q = qs.stringify({
        sort: "seeds",
        short: "1",
        cb: "",
        quality: "720p,1080p,3d",
        page: "1",
        ver: "6.2.1.17",
        os: "mac",
        ...query,
    });
    const url = "https://api.pctapi.com/list?" + q;
    const response = await fetch(url);
    return response.json();
}

export async function fetchTitle(id?: string): Promise<ITitle | undefined> {
    if (!id) {
        return;
    }
    const q = qs.stringify({
        cb: "",
        quality: "720p,1080p,3d",
        imdb: id,
        ver: "6.2.1.17",
        os: "mac",
    });
    const url = "https://api.pctapi.com/movie?" + q;
    const response = await fetch(url);
    return response.json();
}

export function info(title: string) {
    const url = "https://tinfo.pctapi.com/3/movie/tt6264654?api_key=";
}
