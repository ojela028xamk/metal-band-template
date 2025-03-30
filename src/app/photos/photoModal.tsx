"use client";
import Image from "next/image";
import css from "./photoModal.module.scss";
import { useRef } from "react";
import { useClickAway } from "react-use";
import { BandPhoto } from "./photosList";

type PhotoModalProps = {
  toggleModal: (nextValue?: any) => void;
  modalPhoto: BandPhoto;
};

const PhotoModal = ({ toggleModal, modalPhoto }: PhotoModalProps) => {
  const ref = useRef(null);

  useClickAway(ref, () => {
    toggleModal();
  });

  return (
    <div className={css.photo_modal}>
      <div className={css.photo_modal_content} ref={ref}>
        <Image
          className={css.modal_image}
          src={modalPhoto}
          alt={"Band photo"}
          width={modalPhoto.width}
          height={modalPhoto.height}
        />
      </div>
    </div>
  );
};

export default PhotoModal;
