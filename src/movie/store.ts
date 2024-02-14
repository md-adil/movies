import type { IMovie } from "./movie-service";

const store = new Map<string, IMovie>();
async function get(id: string) {
  return store.get(id);
}

async function set(id: string, movie: IMovie) {
  store.set(id, movie);
}
export const movieStore = { get, set };
