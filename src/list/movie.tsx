/* eslint-disable @next/next/no-img-element */
import { css, cx } from "@emotion/css";
import { ButtonBase } from "@mui/material";
import { capitalize } from "lodash";
import { usePhone } from "../hooks/device";
import { bp } from "../libs/device";
import { Star } from "@mui/icons-material";
import { getDuration } from "../libs/time";
import Link from "next/link";
import type { IMovieList } from "./list-service";
const description = css`
  /* min-height: 45%; */
`;

const content = css`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  max-height: 0;
  transition: max-height 0.3s;
  left: 0;
  right: 0;
`;
const item = css`
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
  transition: box-shadow 0.3s;
  box-shadow: 0 0 0;
  margin: 0.5rem;
  /* border: 0.25rem solid #fff; */
  border-radius: 0.25rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12);
  ${bp.up.sm} {
    flex: 1;
    min-width: 190px;
    max-width: 210px;
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      z-index: 1;
    }
  }
  ${bp.down.sm} {
    display: flex;
    background: rgba(0, 0, 0, 0.35);
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-shadow: none;
  }
  &:hover > div {
    max-height: 70%;
  }
`;

const artwork = css`
  width: 100%;
  object-fit: cover;
  ${bp.down.sm} {
    width: 80px;
  }
`;

const container = css`
  padding: 0.5rem 1rem;
  text-align: left;
  h3,
  div {
    padding-bottom: 0.25rem;
  }
`;

const title = css`
  font-weight: 500;
  font-size: 1.1rem;
  margin: 0;
`;

interface IProps {
  movie: IMovieList;
  href?: string;
}
export default function Movie({ movie, href }: IProps) {
  const isPhone = usePhone();
  return (
    <Link href={`/${movie.imdb}/${location.search}`} legacyBehavior passHref shallow>
      <ButtonBase className={item}>
        <img className={artwork} src={movie.artwork} alt={movie.title} />
        <div className={cx({ [content]: !isPhone }, description)}>
          <div className={container}>
            <h3 className={title}>{movie.title}</h3>
            <div>
              <strong>{movie.year}</strong> |{" "}
              <Star
                fontSize="inherit"
                className={css`
                  margin-bottom: -2px;
                `}
              />{" "}
              {movie.rating} | {getDuration(movie.runtime)}
            </div>
            <div></div>
            <div>{movie.genres.map(capitalize).join(", ")}.</div>
            {movie.actors && <div>{movie.actors}.</div>}
          </div>
        </div>
      </ButtonBase>
    </Link>
  );
}
