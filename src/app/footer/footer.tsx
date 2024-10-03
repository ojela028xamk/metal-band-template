import Image from "next/image";
import css from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={css.footer}>
      <span className={css.footer_text}>Powered by: </span>
      <Image
        className={css.footer_image}
        src={"/ms_designer_logo.png"}
        alt={"Microsoft Designer Logo"}
        width={40}
        height={40}
      />
      <span className={css.footer_text}>Microsoft Designer | </span>
      <Image
        className={css.footer_image}
        src={"/deepai_logo.png"}
        alt={"DeepAI Logo"}
        width={40}
        height={40}
      />
      <span className={css.footer_text}>DeepAI Text Generator</span>
    </div>
  );
};

export default Footer;
