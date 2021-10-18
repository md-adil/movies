import { Fragment, useState } from "react";
import MovieItem from "./movie";
import { IMovieList } from "../interfaces";
import classes from "./index.module.scss";
import Dialog from "../components/dialog";
import Movie from "../components/movie";
import { Divider } from "@mui/material";
import { usePhone } from "../hooks/device";
import {cx, css} from "@emotion/css";
import Empty from "./empty";
 
const containerPhone = css`
  flex-direction: column;
`;

interface IProps {
    list: IMovieList[]
}
export default function Movies({list}: IProps) {
  const [movie, setMovie] = useState<IMovieList>();
  const isPhone = usePhone();
  if (!list.length) {
    return (
      <Empty />
    )
  }
  return (
    <div>
      <div className={cx(classes.container, {[containerPhone]: isPhone})}>
        {list.map(m => (
          <MovieItem key={m.id} onClick={() => setMovie(m)} movie={m} />
        ))}
      </div>
     
      <Dialog maxWidth="md" open={Boolean(movie)} onClose={() => setMovie(undefined)}>
        <Movie id={movie?.imdb} />
      </Dialog>
    </div>
  )
}
