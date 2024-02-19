import { useEffect, useRef } from "react";
import Torrent from "webtorrent";
interface Props {
  magnet: string;
}
// const torrentId =
//   "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent";

export function Player({ magnet }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const client = new Torrent({
      webSeeds: true,
    });
    console.log({ client });
    client.progress;
    client.add(magnet, { urlList: ["wss://tracker.btorrent.xyz/"] }, (torrent) => {
      console.log({ torrent });
      const file = torrent.files.find((file) => file.name.endsWith("mp4"));
      console.log({ file });
      if (file) {
        file.appendTo(ref.current!);
      }
    });
    client.on("error", (err) => {
      alert(err);
    });

    return () => {
      client.destroy();
      console.log("destoring client");
    };
  }, [magnet]);
  return (
    <div ref={ref} id="container">
      <video id="player"></video>
    </div>
  );
}
