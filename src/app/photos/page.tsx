"use client";
import Image from "next/image";
import css from "./photos.module.scss";
import { bandPhotos } from "./photosList";
import PhotoModal from "./photoModal";
import { useToggle } from "react-use";
import { useState } from "react";
import BackgroundImage from "../common/backgroundImage";

const Photos = () => {
  const [modal, toggleModal] = useToggle(false);
  const [modalPhoto, setModalPhoto] = useState<string>("");

  const handleModal = (photoUrl: string) => {
    setModalPhoto(photoUrl);
    toggleModal();
  };

  return (
    <div className={css.photos}>
      {modal && (
        <PhotoModal toggleModal={toggleModal} modalPhoto={modalPhoto} />
      )}
      <BackgroundImage source={"/band_photo_5.jpeg"} />
      <div className={css.photos_grid}>
        {bandPhotos.map((photo, index) => (
          <Image
            key={index}
            className={css.band_photo}
            src={photo.url}
            alt={photo.author}
            width={0}
            height={0}
            layout="responsive"
            onClick={() => handleModal(photo.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
