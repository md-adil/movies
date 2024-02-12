import { IMovie, IMovieList } from "./interfaces";
import { ParsedUrlQuery } from "querystring";

const apiServer = process.env.API_SERVER;

function quality(img: string, width: number) {
  return img.replace("w500", `w${width}`);
}

interface Movie {
  _id: string;
  imdb_id: string;
  tmdb_id: number;
  title: string;
  year: string;
  original_language: string;
  exist_translations: string[];
  contextLocale: string;
  synopsis: string;
  runtime: string;
  released: number;
  certification: string;
  torrents: Torrents;
  trailer: string;
  genres: string[];
  images: Images;
  rating: Rating;
}

interface Rating {
  percentage: number;
  watching: number;
  votes: number;
  loved: number;
  hated: number;
}

interface Images {
  poster: string;
  fanart: string;
  banner: string;
}

interface Torrents {
  [lang: string]: TorrentQuality;
}

interface TorrentQuality {
  [quality: string]: Torrent;
}

interface Torrent {
  url: string;
  provider: string;
  source: string;
  title: string;
  quality: string;
  seed: number;
  peer: number;
  size: string;
  filesize: string;
}

export async function fetchList(query: ParsedUrlQuery): Promise<IMovieList[]> {
  const { page = 1, ...qs } = query;
  const q = new URLSearchParams({
    sort: "seeds",
    short: "1",
    cb: "",
    quality: "720p,1080p,3d",
    ver: "6.2.1.17",
    os: "mac",
    ...qs,
  });
  // const url = "https://api.pctapi.com/list?" + q;
  const url = `${apiServer}/movies/${page}?` + q;
  const response = await fetch(url);
  if (!response.ok) {
    return [];
  }
  const movies = (await response.json()) as Movie[];
  movies.forEach((movie) => {
    movie.title = movie.title.replace(/\(\d+\)$/, "");
  });
  return movies.map((x) => {
    return transform(x);
  });
}

function transform(x: Movie): IMovieList {
  return {
    id: x._id,
    imdb: x.imdb_id,
    rating: x.rating.percentage / 10,
    artwork: quality(x.images.poster, 200),
    genres: x.genres,
    runtime: Number(x.runtime),
    title: x.title,
    year: Number(x.year),
    actors: "",
  };
}
function transformTorrent(torrents: Torrents): IMovie["items"] {
  const out: IMovie["items"] = [];
  let i = 1;
  for (const lang of Object.keys(torrents)) {
    for (const quality of Object.keys(torrents[lang])) {
      const torrent = torrents[lang][quality];
      out.push({
        language: lang,
        quality: torrent.quality,
        size_bytes: Number(torrent.size),
        torrent_magnet: torrent.url,
        torrent_peers: torrent.peer,
        torrent_seeds: torrent.seed,
        id: String(i),
      });
      i++;
    }
  }
  return out;
}
function transformForTitle(x: Movie): IMovie {
  return {
    ...transform(x),
    directors: "",
    poster: x.images.poster,
    trailer: x.trailer,
    items: transformTorrent(x.torrents),
    description: x.synopsis,
  };
}
export async function fetchTitle(id?: string): Promise<IMovie | undefined> {
  if (!id) {
    return;
  }
  const url = `${apiServer}/movie/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return transformForTitle(data);
}

export function info(title: string) {
  const url = "https://tinfo.pctapi.com/3/movie/tt6264654?api_key=";
}
