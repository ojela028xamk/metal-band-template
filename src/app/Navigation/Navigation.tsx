import Image from "next/image";
import css from "./Navigation.module.scss";
import NavigationCard from "./NavigationCard";
import { Fragment } from "react";
import Link from "next/link";
import { navigationList } from "./navigationList";

const Navigation = () => {
  return (
    <div className={css.navigation}>
      <Link href="/">
        <Image
          src={"/logo.png"}
          alt={"Beast Wihin Logo"}
          width={340}
          height={100}
        />
      </Link>
      <nav className={css.navigation_bar}>
        {navigationList.map((navItem) => (
          <Fragment key={navItem.link}>
            <NavigationCard link={navItem.link} />
          </Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
