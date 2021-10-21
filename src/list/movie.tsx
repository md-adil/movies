/* eslint-disable @next/next/no-img-element */
import { css, cx } from "@emotion/css";
import { ButtonBase } from "@mui/material";
import { capitalize } from "lodash";
import { usePhone } from "../hooks/device";
import { IMovieList } from "../interfaces";
import { bp } from "../libs/device";

const item = css`
    overflow: hidden;
    background: rgba(0,0,0, .8);
    transition: box-shadow .3s;
    box-shadow: 0 0 0;
    margin: 0.25rem;
    border: 0.25rem solid #fff;
    border-radius: 0.25rem;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12);
    ${bp.up.sm} {
        height: 278px;
        width: 185px;
        &:hover {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            z-index: 1;
        }
    }
    ${bp.down.sm} {
        display: flex;
        background: #fff;
        justify-content: flex-start;
        align-items: flex-start;
        border: 1px solid rgba(0, 0, 0, 0.12);
        box-shadow: none;
        img {
            width: 80px;
        }
    }
    &:hover > div {
        max-height: 70%;
    }
`;

const content = css`
    position: absolute;
    bottom: 0;
    background: rgba(0,0,0,.4);
    color: #fff;
    max-height: 0;
    transition: max-height .3s;
    left: 0; right: 0;
`;

const container = css`
    padding: 0.5rem 1rem;
    text-align: left;
    h3, div {
        padding-bottom: 0.25rem;
    }
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
    const isPhone = usePhone();
    return (
        <ButtonBase className={item} onClick={onClick}>
            <img src={movie.poster_med} alt={movie.title} />
            <div className={cx({[content]: !isPhone})}>
                <div className={container}>
                    <h3 className={title}>{movie.title}</h3>
                    <div>
                        <strong>
                            {movie.year}
                        </strong> | Rating: {movie.rating}
                    </div>
                    <div></div>
                    <div>{movie.genres.map(capitalize).join(', ')}.</div>
                    {movie.actors && <div>
                        {movie.actors}.
                    </div>}
                </div>
            </div>
        </ButtonBase>
    )
}