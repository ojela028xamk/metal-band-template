import { bandEvents } from "./eventList";
import css from "./events.module.scss";

const Events = () => {
  return (
    <div className={css.events}>
      <h1>Events</h1>
      <table>
        <tbody>
          {bandEvents.map((event) => (
            <tr key={event.city}>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>{event.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Events;
