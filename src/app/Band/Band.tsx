import css from "./Band.module.scss";
import { BandMembers } from "./members";

const Band = () => {
  return (
    <div className={css.band}>
      <div className={css.band_members}>
        {BandMembers.map((member) => (
          <div key={member.name} className={css.member}>
            <h2>{member.name}</h2>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Band;
