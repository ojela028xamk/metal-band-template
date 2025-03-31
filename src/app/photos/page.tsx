import { bandPhotos } from "./photosList";
import BackgroundImage from "../common/backgroundImage";
import { Dialog, VisuallyHidden } from "radix-ui";
import Image from "next/image";
import css from "./photos.module.scss";

const Photos = () => {
  return (
    <div className={css.photos}>
      <BackgroundImage
        source={"/background_images/background_image_photos.jpg"}
        width={2640}
        height={1760}
      />
      <div className={css.photos_grid}>
        {bandPhotos.map((photo, index) => (
          <Dialog.Root key={index}>
            <Dialog.Trigger asChild>
              <Image
                className={css.band_photo}
                src={photo.src}
                alt={"Band photo"}
                width={photo.width}
                height={photo.height}
              />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={css.modal_overlay}>
                <Dialog.Content className={css.modal_content}>
                  <VisuallyHidden.Root>
                    <Dialog.Title>Photo modal</Dialog.Title>
                    <Dialog.Description>
                      Showing the whole image on a modal
                    </Dialog.Description>
                  </VisuallyHidden.Root>
                  <Image
                    className={css.modal_image}
                    src={photo}
                    alt={"Band photo"}
                    width={photo.width}
                    height={photo.height}
                  />
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
    </div>
  );
};

export default Photos;
