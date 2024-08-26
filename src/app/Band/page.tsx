import Image from "next/image";
import css from "./band.module.scss";
import { bandMembers } from "./members";

const Band = () => {
  return (
    <div className={css.band}>
      <div className={css.band_members}>
        <Image
          className={css.band_background_image}
          src="/background_images/band_background.png"
          alt="Band Background"
          width={0}
          height={0}
          layout="responsive"
        />
        {bandMembers.map((member) => (
          <div key={member.name} className={css.member}>
            <div className={css.member_description}>
              <h1 className={css.member_name}>{member.name}</h1>
              <p className={css.member_paragraph}>{member.description}</p>
            </div>
            <div className={css.member_image}>
              <Image
                className={css.image}
                width={0}
                height={0}
                layout="responsive"
                src={member.image}
                alt={`${member.name} ${member.role}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Band;
