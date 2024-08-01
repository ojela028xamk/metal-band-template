import Band from "./Band/Band";
import Navigation from "./Navigation/Navigation";
import css from "./page.module.scss";

const Home = () => {
  return (
    <div className={css.main}>
      <Navigation />
      <Band />
    </div>
  );
};

export default Home;
