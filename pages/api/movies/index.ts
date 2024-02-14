import { getList } from "src/list/list-service";
import { createRouter } from "src/server/router";
const app = createRouter();

app.get(async (req, res) => {
  const movies = await getList(req.url!, req.query);
  res.send(movies);
});

export default app.handler();
