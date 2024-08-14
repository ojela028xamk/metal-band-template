"use client";
import Image from "next/image";
import css from "./photos.module.scss";
import { bandPhotos } from "./photosList";

const Photos = () => {
  return (
    <div className={css.photos}>
      <h1>Photos</h1>
      {bandPhotos.map((photo) => (
        <Image
          className={css.band_photo}
          src={photo.url}
          alt={photo.author}
          width={200}
          height={200}
        />
      ))}
    </div>
  );
};

export default Photos;
