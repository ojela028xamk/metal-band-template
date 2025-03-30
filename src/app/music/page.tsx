import Image from "next/image";
import { bandAlbums } from "./albums";
import css from "./music.module.scss";
import BackgroundImage from "../common/backgroundImage";

const Music = () => {
  return (
    <div className={css.music}>
      <BackgroundImage
        source={"/background_images/background_image_music.jpg"}
      />
      {bandAlbums.map((album) => (
        <div className={css.album} key={album.album_name}>
          <div className={css.album_image}>
            <Image
              className={css.image}
              src={album.url}
              alt={album.album_name}
              height={800}
              width={800}
            />
          </div>
          <div className={css.album_info}>
            <h3 className={css.album_name}>{album.album_name}</h3>
            <p className={css.album_year}>Release Year: {album.year}</p>
            <p className={css.album_type}>Type: {album.type}</p>
            <ol className={css.album_tracks}>
              {album.tracks.map((track) => (
                <li key={track} className={css.album_item}>
                  {track}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Music;
