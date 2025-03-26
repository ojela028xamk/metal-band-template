"use client";
import Image from "next/image";
import css from "./navigation.module.scss";
import NavigationCard from "./navigationCard";
import { Fragment, useState } from "react";
import Link from "next/link";
import { navigationList } from "./navigationList";
import { usePathname } from "next/navigation";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
  const currentPath = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => {
    setIsMobileNavOpen(open);
  };

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
      <nav className={css.navigation_bar_mobile}>
        <Button className={css.mobile_menu} onClick={() => toggleDrawer(true)}>
          <MenuIcon className={css.mobile_menu_icon} />
        </Button>
        <Drawer
          anchor="bottom"
          open={isMobileNavOpen}
          onClose={() => toggleDrawer(false)}
        >
          <Box
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
          >
            <List>
              {navigationList.map((navItem) => (
                <ListItem key={navItem.link}>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccessibilityIcon />
                    </ListItemIcon>
                    <ListItemText primary={navItem.link} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navigation;
