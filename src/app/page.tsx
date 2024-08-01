import Band from "./Band/Band";
import Music from "./Music/Music";
import Navigation from "./Navigation/Navigation";
import css from "./page.module.scss";

const Home = () => {
  return (
    <div className={css.main}>
      <Navigation />
      <Band />
      <Music />
    </div>
  );
};

export default Home;
