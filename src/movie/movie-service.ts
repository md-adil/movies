import { transform as baseTransform } from "../list/list-service";
import { axios } from "../axios";
import type { IMovieList } from "../list/list-service";
import { movieStore } from "./store";
import type { Movie, Torrents } from "../interfaces";
export interface IMovie extends IMovieList {
  poster: string;
  items: Item[];
  description: string;
  trailer: string;
}
interface Item {
  id: string;
  language: string;
  quality: string;
  size_bytes: number;
  torrent_magnet: string;
  torrent_peers: number;
  torrent_seeds: number;
}

export async function getMovie(id: string) {
  let movie = await movieStore.get(id);
  if (!movie) {
    movie = await fetchMovie(id);
    await movieStore.set(id, movie);
  }
  return movie;
}

async function fetchMovie(id: string) {
  const { data } = await axios.get<Movie>(`/movie/${id}`);
  return transform(data);
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

function getPoster(image: Movie["images"]) {
  let link = image.poster;
  if (link.startsWith("http:")) {
    link = link.replace("http:", "https:");
  }
  return link;
}

function transform(x: Movie): IMovie {
  return {
    ...baseTransform(x),
    poster: getPoster(x.images),
    trailer: x.trailer,
    items: transformTorrent(x.torrents),
    description: x.synopsis,
  };
}
