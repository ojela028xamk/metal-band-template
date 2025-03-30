import { Dialog, VisuallyHidden } from "radix-ui";
import css from "./navigationMobile.module.scss";
import { navigationList } from "./navigationList";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const NavigationMobile = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={css.mobile_menu}>
          <RxHamburgerMenu className={css.mobile_menu_icon} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={css.menu_overlay} />
        <Dialog.Content
          className={css.menu_content}
          aria-describedby={undefined}
        >
          <VisuallyHidden.Root>
            <Dialog.Title>Navigation</Dialog.Title>
          </VisuallyHidden.Root>
          {navigationList.map((navItem) => (
            <Dialog.Close key={navItem.link} asChild>
              <Link href={navItem.link} className={css.menu_link}>
                {navItem.link}
              </Link>
            </Dialog.Close>
          ))}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NavigationMobile;
