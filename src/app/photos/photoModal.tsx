"use client";
import Image from "next/image";
import css from "./photoModal.module.scss";
import { useRef } from "react";
import { useClickAway } from "react-use";

type PhotoModalProps = {
  toggleModal: (nextValue?: any) => void;
  modalPhoto: string;
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
          src={modalPhoto}
          alt={"Band photo"}
          width={0}
          height={0}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default PhotoModal;
