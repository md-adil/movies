import type { ParsedUrlQuery } from "querystring";
import { axios } from "../axios";
import type { Movie } from "../interfaces";
import NodeCache from "node-cache";

const cache = new NodeCache({
  stdTTL: 4 * 60 * 60,
});

export interface IMovieList {
  id: string;
  imdb: string;
  actors: string;
  genres: string[];
  artwork: string;
  rating: number;
  runtime: number;
  title: string;
  year: number;
}

export async function getList(key: string, query: ParsedUrlQuery) {
  let list = cache.get<IMovieList[]>(key);
  if (!list) {
    list = await fetchList(query);
    cache.set(key, list);
  }
  return list;
}

async function fetchList(query: ParsedUrlQuery): Promise<IMovieList[]> {
  const { page = 1, ...qs } = query;
  const { data: movies } = await axios.get<Movie[]>(`/movies/${page}`, {
    params: { sort: "trending", ...qs },
  });

  movies.forEach((movie) => {
    movie.title = movie.title.replace(/\(\d+\)$/, "");
  });
  return movies.map((x) => {
    return transform(x);
  });
}

export function transform(x: Movie): IMovieList {
  return {
    id: x._id,
    imdb: x.imdb_id,
    rating: x.rating.percentage / 10,
    artwork: quality(x.images.poster, 300),
    genres: x.genres,
    runtime: Number(x.runtime),
    title: x.title,
    year: Number(x.year),
    actors: "",
  };
}
function quality(img: string, width: number) {
  if (img.startsWith("http:")) {
    img = img.replace("http:", "https:");
  }
  return img.replace("w500", `w${width}`);
}
