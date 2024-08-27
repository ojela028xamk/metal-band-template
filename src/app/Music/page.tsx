import Image from "next/image";
import { bandAlbums } from "./albums";
import css from "./music.module.scss";

const Music = () => {
  return (
    <div className={css.music}>
      <h1>Music</h1>
      {bandAlbums.map((album) => (
        <div className={css.album} key={album.album_name}>
          <div className={css.album_image}>
            <Image
              className={css.image}
              src={album.url}
              alt={album.album_name}
              height={0}
              width={0}
              layout="responsive"
            />
          </div>
          <div className={css.album_info}>
            <h3 className={css.album_header}>{album.album_name}</h3>
            <p className={css.album_paragraph}>
              {album.year} - {album.type}
            </p>
            <ol className={css.album_tracks}>
              {album.tracks.map((track) => (
                <li key={track}>{track}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Music;
