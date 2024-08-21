import css from "./Navigation.module.scss";
import NavigationCard from "./NavigationCard";
import { Fragment } from "react";

export enum NavigationLinks {
  BAND = "band",
  MUSIC = "music",
  PHOTOS = "photos",
  EVENTS = "events",
}

const Navigation = () => {
  return (
    <div className={css.navigation}>
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
