import Image from "next/image";

// icons/images.
import Logo from "/public/logo.svg";
import RingIcon from "/public/ring.svg";
import CartIcon from "/public/shopping-cart.svg";

// react components.
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import CustomLink from "@/components/shared/CustomLink";

const Header = ({ lang }) => {
  return (
    <header>
      <nav className="container flex items-center justify-between py-6 space-x-10">
        <CustomLink href="/">
          <Image
            src={Logo}
            alt="logo"
            width={139}
            height={26}
            className="w-auto"
          />
        </CustomLink>
        <ul className="flex items-center space-x-5">
          <li className="bg-primary/20 cursor-pointer dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
            <Image src={RingIcon} width={24} height={24} alt="ring" />
          </li>

          <li className="bg-primary/20 cursor-pointer dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
            <ThemeSwitcher />
          </li>

          <li className="bg-primary/20 cursor-pointer dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
            <Image src={CartIcon} width={24} height={24} alt="cart" />
          </li>

          <li className="bg-primary/20 relative cursor-pointer dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block">
            <LanguageSwitcher lang={lang} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
