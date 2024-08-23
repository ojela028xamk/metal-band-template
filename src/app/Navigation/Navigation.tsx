import Image from "next/image";
import css from "./Navigation.module.scss";
import NavigationCard from "./NavigationCard";
import { Fragment } from "react";
import Link from "next/link";

export enum NavigationLinks {
  BAND = "band",
  MUSIC = "music",
  PHOTOS = "photos",
  EVENTS = "events",
}

const Navigation = () => {
  return (
    <div className={css.navigation}>
      <Link href="/">
        <Image
          src={"/logo.png"}
          alt={"Beast Wihin Logo"}
          width={340}
          height={100}
        />
      </Link>
      <nav className={css.navigation_bar}>
        {Object.values(NavigationLinks).map((link) => (
          <Fragment key={link}>
            <NavigationCard link={link} />
          </Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
