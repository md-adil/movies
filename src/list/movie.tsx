/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/css";
import { ButtonBase } from "@mui/material";
import { IMovieList } from "../interfaces";

const item = css`
    height: 278px;
    width: 185px;
    overflow: hidden;
    background: rgba(0,0,0, .8);
    transition: box-shadow .3s;
    box-shadow: 0 0 0;
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        z-index: 1;
    }
    &:hover > div {
        height: 50%;
    }
`;

const content = css`
    position: absolute;
    bottom: 0;
    background: rgba(0,0,0,.4);
    color: #fff;
    height: 0;
    transition: height .3s;
    left: 0; right: 0;
`;

const container = css`
    padding: 0.5rem 1rem;
    text-align: left;
`;

const title = css`
    font-weight: 500;
    margin: 0;
`;

interface IProps {
    movie: IMovieList
    onClick: () => void;
}
export default function Movie({movie, onClick}: IProps) {
    return (
        <ButtonBase className={item} onClick={onClick}>
            <img src={movie.poster_med} alt={movie.title} />
            <div className={content}>
                <div className={container}>
                    <h3 className={title}>{movie.title}</h3>
                    <div>Rating: {movie.rating}</div>
                    <div>{movie.genres.join(', ')}</div>
                    <div>
                        {movie.actors}
                    </div>
                </div>
            </div>
        </ButtonBase>
    )
}