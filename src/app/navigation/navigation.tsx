"use client";
import Image from "next/image";
import css from "./navigation.module.scss";
import NavigationCard from "./navigationCard";
import { Fragment } from "react";
import Link from "next/link";
import { navigationList } from "./navigationList";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const currentPath = usePathname();

  return (
    <div
      className={
        currentPath === "/" ? css.navigation_main : css.navigation_page
      }
    >
      <Link href="/">
        <Image
          src={"/logo.png"}
          alt={"Distortion Band Logo"}
          width={803}
          height={195}
          layout="responsive"
        />
      </Link>
      <nav className={css.navigation_bar}>
        {navigationList.map((navItem) => (
          <Fragment key={navItem.link}>
            <NavigationCard navItem={navItem} />
          </Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
