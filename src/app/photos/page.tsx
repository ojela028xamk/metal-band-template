"use client";
import Image from "next/image";
import css from "./photos.module.scss";
import { bandPhotos } from "./photosList";

const Photos = () => {
  return (
    <div className={css.photos}>
      <h1>Photos</h1>
      <div className={css.photos_grid}>
        {bandPhotos.map((photo, index) => (
          <Image
            key={index}
            className={css.band_photo}
            src={photo.url}
            alt={photo.author}
            width={200}
            height={200}
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
