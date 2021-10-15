import { Grid, IconButton } from "@mui/material";
import { Download as DownloadIcon } from "@mui/icons-material";
import { useAsync } from "react-use"
import { fetchTitle } from "../api"
import { IMovie } from "../interfaces";
import { humanFileSize } from "../libs/filesize";
import * as classes from "./movie.style";
import Center from "./center";
import Loader from "./loader";

interface IProps {
    id?: string;
}
export default function Movie(props: IProps) {
    const {loading, value: movie} = useAsync(() => fetchTitle(props.id), [props.id])
    if (loading) {
        return (
            <Center style={{height: '40vh', width: '40vw'}}>
                <Loader />
            </Center>
        )
    }
    if (!movie) {
        return null;
    }
    return (
        <Grid container className={classes.container}>
            <Grid item xs={6} className={classes.imageContainer}>
                <img className={classes.poster} src={movie.poster_big} alt={movie.title} />
            </Grid>
            <Grid item xs={6} className={classes.content}>
                <h3 className={classes.title}>
                    {movie.title}
                </h3>
                <div>
                Rating {movie.rating}
                </div>
                <div>
                    Year {movie.year}
                </div>
                <div className={classes.downloads}>
                    {
                        movie.items.map((item) => (
                            <Downloader item={item} key={item.id} />
                        ))
                    }
                </div>
            </Grid>
        </Grid>
    )
}


interface IDownloaderProps {
    item: IMovie["items"][0]
}
function Downloader({item}: IDownloaderProps) {
    return (
        <div className={classes.download}>
            <div>
                {item.quality} {item.language && <> - {item.language}</>}
            </div>
            <small>{item.torrent_seeds}/{item.torrent_peers}</small>
            <span>{humanFileSize(item.size_bytes)}</span>
            <IconButton key={item.id} href={item.torrent_magnet}>
                <DownloadIcon />
            </IconButton>
        </div>
    )
}