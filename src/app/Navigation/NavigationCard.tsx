import Link from "next/link";
import { NavigationLinks } from "./Navigation";
import css from "./NavigationCard.module.scss";

type NavigationCardProps = {
  link: NavigationLinks;
};

const NavigationCard = ({ link }: NavigationCardProps) => {
  return (
    <div className={css.navigation_card}>
      <Link href={link}>{link}</Link>
    </div>
  );
};

export default NavigationCard;
