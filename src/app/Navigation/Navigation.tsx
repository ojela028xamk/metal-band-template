import css from "./Navigation.module.scss";

enum NavigationLinks {
  BAND = "Band",
  MUSIC = "Music",
  PHOTOS = "Photos",
  EVENTS = "Events",
}

const Navigation = () => {
  return (
    <div className={css.navigation}>
      <nav className={css.navigation_bar}>
        {Object.values(NavigationLinks).map((link) => (
          <span className={css.navlink}>{link}</span>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
