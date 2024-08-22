import Link from "next/link";
import { NavigationLinks } from "./Navigation";
import css from "./NavigationCard.module.scss";
import Image from "next/image";

type NavigationCardProps = {
  link: NavigationLinks;
};

const NavigationCard = ({ link }: NavigationCardProps) => {
  const linkName = link.charAt(0).toUpperCase() + link.slice(1);

  return (
    <div className={css.navigation_card}>
      <Image
        className={css.card_image}
        src={"/card_images/band_card.jpg"}
        alt={"Card"}
        width="200"
        height="200"
      />
      <Link className={css.card_link} href={link}>
        {linkName}
      </Link>
    </div>
  );
};

export default NavigationCard;
