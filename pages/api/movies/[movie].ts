import { getMovie } from "src/movie/movie-service";
import { createRouter } from "src/server/router";
const app = createRouter();

app.get(async (req, res) => {
  const movie = await getMovie(req.query.movie as any);
  res.send(movie);
});

export default app.handler();
