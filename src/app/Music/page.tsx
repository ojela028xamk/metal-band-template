import Image from "next/image";
import { bandAlbums } from "./albums";
import css from "./music.module.scss";

const Music = () => {
  return (
    <div className={css.music}>
      <h1>Music</h1>
      {bandAlbums.map((album) => (
        <div key={album.album_name}>
          <h3>{album.album_name}</h3>
          <p>
            {album.year} - {album.type}
          </p>
          <ol>
            {album.tracks.map((track) => (
              <li key={track}>{track}</li>
            ))}
          </ol>
          <Image
            src={album.url}
            alt={album.album_name}
            height={200}
            width={200}
          />
        </div>
      ))}
    </div>
  );
};

export default Music;
