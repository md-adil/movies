export interface Movie {
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

export interface Torrents {
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
