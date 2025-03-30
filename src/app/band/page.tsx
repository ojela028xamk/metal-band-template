import Image from "next/image";
import css from "./band.module.scss";
import { bandMembers } from "./members";
import BackgroundImage from "../common/backgroundImage";

const Band = () => {
  return (
    <div className={css.band}>
      <div className={css.band_members}>
        <BackgroundImage
          source={"/background_images/background_image_band.jpg"}
          width={1920}
          height={1280}
        />
        {bandMembers.map((member) => (
          <div key={member.name} className={css.member}>
            <div className={css.member_description}>
              <h1 className={css.member_name}>{member.name}</h1>
              <p className={css.member_description}>{member.description}</p>
            </div>
            <div className={css.member_image}>
              <Image
                className={css.image}
                src={member.image}
                alt={`${member.name} ${member.role}`}
                width={2936}
                height={2936}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Band;
