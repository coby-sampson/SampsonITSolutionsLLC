import NextLink from "next/link";
import { tw } from "twind";
import LinkButton from "./LinkButton";

export interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <nav className={tw`flex items-center justify-between py-8 px-16`}>
      <NextLink href="/">
        <a>
          <img src="/logo.png" />
        </a>
      </NextLink>

      <ul className={tw`flex items-center space-x-16`}>
        <li>
          <LinkButton href="/about">About Us</LinkButton>
        </li>

        <li>
          <LinkButton
            block
            href="https://square.site/book/4EAHPMD825X8K/sampson-it-solutions-llc%22%3EBook an Appointment"
          >
            Book an Appointment
          </LinkButton>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
