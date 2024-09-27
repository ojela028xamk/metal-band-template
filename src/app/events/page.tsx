import { bandEvents } from "./eventList";
import css from "./events.module.scss";
import BackgroundImage from "../common/backgroundImage";

const Events = () => {
  return (
    <div className={css.events}>
      <BackgroundImage
        source={"/background_images/background_image_events.jpg"}
      />
      {bandEvents.map((event) => (
        <div className={css.events_row} key={event.city}>
          <span>{event.date}</span>
          <span>{event.location}</span>
          <span>{event.city}</span>
        </div>
      ))}
    </div>
  );
};

export default Events;
