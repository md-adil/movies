/* eslint-disable @next/next/no-img-element */
import { Chip, Grid, IconButton, Link, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { ArrowDownward, Download as DownloadIcon, YouTube } from "@mui/icons-material";
import { useAsync } from "react-use";
import { humanFileSize } from "../libs/filesize";
import * as classes from "./movie.style";
import Center from "./center";
import Loader from "./loader";
import { css, cx } from "@emotion/css";
import { usePhone } from "../hooks/device";
import { capitalize } from "lodash";
import Image, { type ImageLoaderProps } from "next/image";
import { Help } from "../movie/components/guide";
import { bp } from "../libs/device";
import { getDuration } from "../libs/time";
import { getHealthColor } from "../health";
import { type IMovie } from "src/movie/movie-service";
import { client } from "src/axios";
const blurImage =
  "data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzMzIiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzIyMiIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzMzMiIG9mZnNldD0iNzAlIiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI0NzUiIGZpbGw9IiMzMzMiIC8+CiAgPHJlY3QgaWQ9InIiIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSJ1cmwoI2cpIiAvPgogIDxhbmltYXRlIHhsaW5rOmhyZWY9IiNyIiBhdHRyaWJ1dGVOYW1lPSJ4IiBmcm9tPSItNzAwIiB0bz0iNzAwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgIC8+Cjwvc3ZnPg==";

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
  width: 75%;
  border: 2px solid;
  text-align: center;
  display: inline-block;
  border-radius: 1rem;
`;
function imageLoader({ src }: ImageLoaderProps) {
  return src;
}

async function getMovie(id: string) {
  const { data } = await client.get<IMovie>(`/movies/${id}`);
  return data;
}

interface IProps {
  id?: string;
}
export default function Movie(props: IProps) {
  const isPhone = usePhone();
  const { loading, value: movie } = useAsync(() => getMovie(props.id!), [props.id]);

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
        <div className={gap} style={{ color: "#727272" }}>
          {movie.description}
        </div>

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
      </TableCell>
    </TableRow>
  );
}
