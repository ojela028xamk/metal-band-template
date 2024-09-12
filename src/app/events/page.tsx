import Image from "next/image";
import { bandEvents } from "./eventList";
import css from "./events.module.scss";

const Events = () => {
  return (
    <div className={css.events}>
      <Image
        className={css.events_background_image}
        src="/band_photo_3.jpeg"
        alt="Music Background"
        width={0}
        height={0}
        layout="responsive"
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
