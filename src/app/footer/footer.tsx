"use client";
import Image from "next/image";
import css from "./footer.module.scss";
import { usePathname } from "next/navigation";

const Footer = () => {
  const currentPath = usePathname();

  return (
    <div
      className={css.footer}
      style={{ display: currentPath === "/" ? "none" : "flex" }}
    >
      <span className={css.footer_text}>Powered by: </span>
      <div className={css.footer_item}>
        <Image
          className={css.footer_image}
          src={"/pexels_logo.png"}
          alt={"Pexels Logo"}
          width={45}
          height={45}
          quality={50}
        />
        <span className={css.footer_text}>Pexels</span>
      </div>
      <div className={css.footer_item}>
        <Image
          className={css.footer_image}
          src={"/deepai_logo.png"}
          alt={"DeepAI Logo"}
          width={40}
          height={40}
          quality={50}
        />
        <span className={css.footer_text}>DeepAI Text Generator</span>
      </div>
    </div>
  );
};

export default Footer;
