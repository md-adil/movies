import { useMemo } from "react";
import MovieItem from "./movie";
import Dialog from "../components/dialog";
import Movie from "../components/movie";
import Empty from "./empty";
import { useRouter } from "next/router";
import type { IMovieList } from "./list-service";

interface IProps {
  list: IMovieList[];
}
export default function Movies({ list }: IProps) {
  const router = useRouter();
  const movie = useMemo(() => {
    if (!router.query.index?.length) {
      return;
    }
    return router.query.index[0];
  }, [router.query.index]);
  if (!list.length) {
    return <Empty />;
  }
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-5">
        {list.map((m) => (
          <MovieItem movie={m} key={m.id} />
        ))}
      </div>
      <Dialog maxWidth="md" open={Boolean(movie)} onClose={() => router.push(`/${location.search}`, undefined, { shallow: true })}>
        <Movie id={movie} />
      </Dialog>
    </div>
  );
}
