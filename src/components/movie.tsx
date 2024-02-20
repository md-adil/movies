/* eslint-disable @next/next/no-img-element */
import { Chip, Grid, IconButton, Link, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { ArrowDownward, Check, ContentCopy, Download as DownloadIcon, YouTube } from "@mui/icons-material";
import { humanFileSize } from "../libs/filesize";
import * as classes from "./movie.style";
import Center from "./center";
import Loader from "./loader";
import { css, cx } from "@emotion/css";
import { usePhone } from "../hooks/device";
import { capitalize } from "lodash";
import { Help } from "../movie/components/guide";
import { bp } from "../libs/device";
import { getDuration } from "../libs/time";
import { getHealthColor } from "../health";
import { type IMovie } from "src/movie/movie-service";
import { client } from "src/axios";
import { useQuery } from "@tanstack/react-query";
import { cloneElement, useState, type ReactElement, type ReactNode } from "react";

const gap = css`
  padding-bottom: 1rem;
`;

const gotoDown = css`
  position: absolute;
  bottom: 3rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.2);
`;

const centerLoading = css`
  height: 50vh;
  width: 50vw;
  ${bp.down.sm} {
    width: 100%;
  }
`;
const healthBox = css`
  padding: 0.2rem 0.5rem;
  border: 2px solid;
  text-align: center;
  display: inline-block;
  border-radius: 1rem;
  ${bp.up.sm} {
    width: 75%;
  }
`;

async function getMovie(id?: string) {
  if (!id) {
    return null;
  }
  const { data } = await client.get<IMovie>(`/movies/${id}/`);
  return data;
}

interface IProps {
  id?: string;
}
export default function Movie(props: IProps) {
  const isPhone = usePhone();
  const { isLoading: loading, data: movie } = useQuery({ queryFn: () => getMovie(props.id), queryKey: ["/movies/" + props.id] });

  const handleDownload = () => {
    document.getElementById("downloads")?.scrollIntoView({ behavior: "smooth" });
  };
  if (loading) {
    return (
      <Center className={centerLoading}>
        <Loader />
      </Center>
    );
  }
  if (!movie) {
    return null;
  }
  return (
    <Grid container className={cx(classes.container, { [classes.phoneContainer]: isPhone })}>
      <Grid item xs={12} sm={5} className={classes.imageContainer}>
        <img className={classes.poster} src={movie.poster} alt={movie.title} />
        {isPhone && (
          <IconButton onClick={handleDownload} className={gotoDown}>
            <ArrowDownward />
          </IconButton>
        )}
      </Grid>
      <Grid item xs={12} sm={7} className={classes.content}>
        <h3 className={classes.title}>{movie.title}</h3>
        <div className={gap}>{getDuration(movie.runtime)}</div>
        <div className={`${gap} text-slate`}>{movie.description}</div>
        <div className={gap}>
          {movie.genres.map((gen) => (
            <Chip
              key={gen}
              className={css`
                margin-right: 0.4rem;
                margin-bottom: 0.4rem;
              `}
              label={capitalize(gen)}
            />
          ))}
        </div>
        {movie.actors && <div className={gap}>{movie.actors}.</div>}
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          {movie.year}{" "}
          <Link target="imdb" href={`https://www.imdb.com/title/${movie.imdb}`}>
            Rating {movie.rating}
          </Link>
          <Link
            className={css`
              display: flex;
              text-decoration: none;
              align-items: center;
            `}
            target="youtube-trailer"
            href={movie.trailer}
          >
            Trailer &nbsp;
            <YouTube />
          </Link>
        </div>
        <Help />
        <Downloads movie={movie} />
      </Grid>
    </Grid>
  );
}

function Downloads({ movie }: { movie: IMovie }) {
  return (
    <div className={classes.downloads} id="downloads">
      <Table>
        <TableBody>
          {movie.items.map((item) => (
            <Downloader item={item} key={item.id} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

interface IDownloaderProps {
  item: IMovie["items"][0];
}
function Downloader({ item }: IDownloaderProps) {
  const handleCopy = () => {
    if (!navigator.clipboard) {
      return;
    }
    navigator.clipboard.writeText(item.torrent_magnet);
  };
  return (
    <TableRow sx={{ "&:last-child td": { border: 0 } }}>
      <TableCell>
        {item.quality} {item.language && <> - {item.language}</>}
      </TableCell>
      <TableCell>
        <div
          className={cx(
            healthBox,
            css`
              border-color: ${getHealthColor(item.torrent_seeds, item.torrent_peers)};
            `
          )}
        >
          {item.torrent_seeds}/{item.torrent_peers}
        </div>
      </TableCell>
      <TableCell>{humanFileSize(item.size_bytes)}</TableCell>
      <TableCell>
        <IconButton size="small" key={item.id} href={item.torrent_magnet}>
          <DownloadIcon style={{ fontSize: "inherit" }} />
        </IconButton>
        <Actionable
          delay={1500}
          key={item.id}
          onClick={handleCopy}
          successElement={
            <IconButton size="small">
              <Check className="text-green-600" fontSize="inherit" />
            </IconButton>
          }
        >
          <IconButton size="small">
            <ContentCopy style={{ fontSize: "inherit" }} />
          </IconButton>
        </Actionable>
      </TableCell>
    </TableRow>
  );
}

interface ActionableProps {
  onClick(e: any): void;
  children: ReactElement;
  successElement: ReactNode;
  delay: number;
}
function Actionable({ children, delay, successElement, onClick }: ActionableProps) {
  const [isClicked, setIsClicked] = useState(false);
  if (isClicked) {
    return <>{successElement}</>;
  }
  const handleClick = (e: any) => {
    onClick(e);
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, delay);
  };
  return cloneElement(children, {
    onClick: handleClick,
  });
}
