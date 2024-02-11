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

export interface IMovie extends IMovieList {
  directors: string;
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
