import Image from "next/image";
import css from "./Band.module.scss";
import { BandMembers } from "./Members";

const Band = () => {
  return (
    <div className={css.band}>
      <div className={css.band_members}>
        {BandMembers.map((member) => (
          <div key={member.name} className={css.member}>
            <div className={css.member_description}>
              <h1>{member.name}</h1>
              <p>{member.description}</p>
            </div>
            <Image
              className={css.member_image}
              width={200}
              height={300}
              src={member.image}
              alt={`${member.name} ${member.role}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Band;
