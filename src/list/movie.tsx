/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ButtonBase } from "@mui/material";
import { TimerOutlined } from "@mui/icons-material";
import { getDuration } from "../libs/time";
import Link from "next/link";
import type { IMovieList } from "./list-service";
import imdbIcon from "src/icons/imdb.png";

interface IProps {
  movie: IMovieList;
  href?: string;
}
export default function Movie({ movie }: IProps) {
  return (
    <Link href={`/${movie.imdb}/${location.search}`} legacyBehavior passHref shallow>
      <ButtonBase className="flex !bg-[#00000040] flex-col shadow overflow-hidden mb-2 flex-1 min-w-[160px] max-w-[280px] md:min-w-[300px]">
        <img className="w-full object-cover overflow-hidden rounded" src={movie.artwork} alt={movie.title} />
        <div className="flex justify-between items-center w-full py-4 px-2 text-xs md:text-sm">
          <span className="inline-flex items-center">
            <TimerOutlined style={{ fontSize: "inherit" }} /> {getDuration(movie.runtime)}
          </span>
          <span className="inline-flex items-center">
            <span>{movie.year}</span>&nbsp;
            <img src={imdbIcon.src} width={30} />
            &nbsp;
            {movie.rating.toFixed(1)}
          </span>
        </div>
      </ButtonBase>
    </Link>
  );
}
