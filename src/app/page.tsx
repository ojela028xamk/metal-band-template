import css from "./page.module.scss";

const Home = () => {
  return (
    <div className={css.main}>
      <div className={css.video_container}>
        <video className={css.video} loop autoPlay muted>
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Home;
