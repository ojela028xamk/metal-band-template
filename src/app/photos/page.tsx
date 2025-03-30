"use client";
import Image from "next/image";
import css from "./photos.module.scss";
import { BandPhoto, bandPhotos } from "./photosList";
import PhotoModal from "./photoModal";
import { useToggle } from "react-use";
import { useState } from "react";
import BackgroundImage from "../common/backgroundImage";

const Photos = () => {
  const [modal, toggleModal] = useToggle(false);
  const [modalPhoto, setModalPhoto] = useState<BandPhoto>();

  const handleModal = (photo: BandPhoto) => {
    setModalPhoto(photo);
    toggleModal();
  };

  return (
    <div className={css.photos}>
      {modal && modalPhoto && (
        <PhotoModal toggleModal={toggleModal} modalPhoto={modalPhoto} />
      )}
      <BackgroundImage
        source={"/background_images/background_image_photos.jpg"}
        width={2640}
        height={1760}
      />
      <div className={css.photos_grid}>
        {bandPhotos.map((photo, index) => (
          <Image
            key={index}
            className={css.band_photo}
            src={photo.src}
            alt={"Band photo"}
            width={photo.width}
            height={photo.height}
            onClick={() => handleModal(photo)}
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
