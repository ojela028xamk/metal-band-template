import Link from "next/link";
import css from "./Navigation.module.scss";

enum NavigationLinks {
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
          <Link key={link} className={css.navlink} href={link}>
            {link}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
