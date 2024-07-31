import Navigation from "./Navigation/Navigation";
import css from "./page.module.scss";

const Home = () => {
  return (
    <div className={css.main}>
      <Navigation />
    </div>
  );
};

export default Home;
