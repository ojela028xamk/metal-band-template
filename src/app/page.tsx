import Navigation from "./Navigation/Navigation";
import css from "./page.module.scss";

const Home = () => {
  return (
    <div className={css.main}>
      <Navigation />
      <h2>Metal band template</h2>
    </div>
  );
};

export default Home;
