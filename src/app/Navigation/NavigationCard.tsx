import Link from "next/link";
import css from "./NavigationCard.module.scss";
import Image from "next/image";
import { NavigationLinks } from "./navigationList";

type NavigationCardProps = {
  link: NavigationLinks;
};

const NavigationCard = ({ link }: NavigationCardProps) => {
  const linkName = link.charAt(0).toUpperCase() + link.slice(1);

  return (
    <div className={css.navigation_card}>
      <Link className={css.card_link} href={link}>
        <Image
          className={css.card_image}
          src={"/card_images/band_card.jpg"}
          alt={"Card"}
          width={0}
          height={0}
          layout="responsive"
        />
        <span className={css.card_text}>{linkName}</span>
      </Link>
    </div>
  );
};

export default NavigationCard;
