import Image from "next/image";
import css from "./backgroundImage.module.scss";

type BackgroundImageProps = {
  source: string;
  width: number;
  height: number;
};

const BackgroundImage = ({ source, width, height }: BackgroundImageProps) => {
  return (
    <Image
      className={css.background_image}
      src={source}
      alt={"Background image"}
      width={width}
      height={height}
      priority
    />
  );
};

export default BackgroundImage;
