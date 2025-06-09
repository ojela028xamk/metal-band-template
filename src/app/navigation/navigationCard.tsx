import Link from "next/link";
import css from "./navigationCard.module.scss";
import Image from "next/image";
import { NavigationItem } from "./navigationList";

type NavigationCardProps = {
  navItem: NavigationItem;
};

const NavigationCard = ({ navItem }: NavigationCardProps) => {
  const linkName = navItem.link.charAt(0).toUpperCase() + navItem.link.slice(1);

  return (
    <div className={css.navigation_card}>
      <Link className={css.card_link} href={navItem.link}>
        <Image
          className={css.card_image}
          src={navItem.image}
          alt={"Navigation image"}
          width={250}
          height={250}
          priority
          quality={50}
        />
        <span className={css.card_text}>{linkName}</span>
      </Link>
    </div>
  );
};

export default NavigationCard;
