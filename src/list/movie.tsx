/* eslint-disable @next/next/no-img-element */
import { css, cx } from "@emotion/css";
import { ButtonBase, Divider } from "@mui/material";
import { usePhone } from "../hooks/device";
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
        max-height: 70%;
    }
`;

const itemPhone = css`
    height: auto;
    width: auto;
    display: flex;
    background: #fff;
    justify-content: flex-start;
    align-items: flex-start;
    &:hover {
        box-shadow: none;
    }
    img {
        width: 80px;
    }
`

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
        <ButtonBase className={cx(item, {[itemPhone]: isPhone})} onClick={onClick}>
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
                    <div>{movie.genres.join(', ')}</div>
                    <div>
                        {movie.actors}
                    </div>
                </div>
            </div>
        </ButtonBase>
    )
}