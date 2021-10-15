export interface IMovieList {
    actors: string;
    description: string;
    directors: string;
    genres: string[];
    id: string;
    imdb: string;
    items: any[];
    items_lang: any[];
    popularity: string;
    poster_big: string;
    poster_med: string;
    rating: number;
    runtime: number;
    title: string;
    trailer: string;
    writers: string;
    year: number;
}
export interface IList {
    MovieList: IMovieList[];
}

export interface IMovie {
    actors: string;
    description: string;
    directors: string;
    genres: string[];
    id: string;
    imdb: string;
    items: Item[];
    items_lang: any[];
    popularity: string;
    poster_big: string;
    poster_med: string;
    rating: number;
    runtime: number;
    title: string;
    trailer: string;
    writers: string;
    year: number;
}

interface Item {
    durability: number;
    file: string;
    id: string;
    language: string;
    quality: string;
    size_bytes: number;
    torrent_magnet: string;
    torrent_peers: number;
    torrent_seeds: number;
    torrent_url: string;
    vitality: number;
}

export type ITitle = IMovie;
