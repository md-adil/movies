import { useState } from "react";
import MovieItem from "./movie";
import { IMovieList } from "../interfaces";
import classes from "./index.module.scss";
import Dialog from "../components/dialog";
import Movie from "../components/movie";
import { useRouter } from "next/router";
import { Container, Input } from "@mui/material";


interface IProps {
    list: IMovieList[]
}
export default function Movies({list}: IProps) {
  const [movie, setMovie] = useState<IMovieList>();
  return (
    <div>
      <div className={classes.container}>
        {list.map(m => (
          <MovieItem onClick={() => setMovie(m)} movie={m} key={m.id} />
        ))}
      </div>
     
      <Dialog maxWidth="md" open={Boolean(movie)} onClose={() => setMovie(undefined)}>
        <Movie id={movie?.imdb} />
      </Dialog>
    </div>
  )
}

export function SearchBox() {
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push(`?keywords=${e.target.keywords.value}`);
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <button type="submit" style={{display: 'none'}}></button>
        <Input name="keywords" placeholder="Movie title" fullWidth defaultValue={router.query.keywords}/>
      </form>
    </Container>
  )
}
