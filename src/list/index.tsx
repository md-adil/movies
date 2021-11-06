import { Fragment, useMemo, useState } from "react";
import MovieItem from "./movie";
import { IMovieList } from "../interfaces";
import classes from "./index.module.scss";
import Dialog from "../components/dialog";
import Movie from "../components/movie";
import {cx, css} from "@emotion/css";
import Empty from "./empty";
import { bp } from "../libs/device";
import {useRouter} from "next/router";
 
const container = css`
  ${bp.down.sm} {
    flex-direction: column;
  }
`;

interface IProps {
    list: IMovieList[]
}
export default function Movies({list}: IProps) {
  const router = useRouter();
  const movie = useMemo(() => {
    if (!router.query.index?.length) {
      return null;
    }
    const id = router.query.index[0];
    return list.find(x => x.imdb === id);
  }, [router.query.index, list]);
  if (!list.length) {
    return (
      <Empty />
    )
  }
  return (
    <div>
      <div className={cx(classes.container, container)}>
        {list.map(m => (
          <MovieItem movie={m} key={m.id} />
        ))}
      </div>
      <Dialog maxWidth="md" open={Boolean(movie)} onClose={() => router.push('/', undefined, {shallow: true})}>
        <Movie id={movie?.imdb} />
      </Dialog>
    </div>
  )
}
