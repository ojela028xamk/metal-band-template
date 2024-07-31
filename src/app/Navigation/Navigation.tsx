import css from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={css.navigation}>
      <nav className={css.navigation_bar}>
        <span className={css.navlink}>Band</span>
        <span className={css.navlink}>Music</span>
        <span className={css.navlink}>Photos</span>
        <span className={css.navlink}>Events</span>
      </nav>
    </div>
  );
};

export default Navigation;
