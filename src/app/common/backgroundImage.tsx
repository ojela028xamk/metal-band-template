import Image from "next/image";
import css from "./backgroundImage.module.scss";

type BackgroundImageProps = {
  source: string;
};

const BackgroundImage = ({ source }: BackgroundImageProps) => {
  return (
    <Image
      className={css.background_image}
      src={source}
      alt={"Background image"}
      width={1920}
      height={1080}
      priority
    />
  );
};

export default BackgroundImage;
