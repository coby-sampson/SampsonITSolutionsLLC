import NextLink from "next/link";
import { tw } from "twind";

interface LinkButtonProps {
  href: string;
  block?: boolean;
}

const LinkButton: React.FC<
  React.ClassAttributes<HTMLAnchorElement> &
    React.ButtonHTMLAttributes<HTMLAnchorElement> &
    LinkButtonProps
> = ({ href, block, children, ...props }) => (
  <NextLink href={href}>
    <a
      {...props}
      className={tw(
        block && tw`bg-gray-700 text-white px-8 py-4`,
        block && tw`hover:(bg-gray-800 shadow-lg)`,
        block && tw`active:(bg-gray-900 shadow-none)`,

        !block && tw`px-6 py-2`,
        !block && tw`hover:(bg-gray-100)`,
        !block && tw`active:(bg-gray-200)`,

        tw`block transform duration-300 ease-in-out rounded-xl font-publicsans`,
        tw`hover:(scale-105)`,
        tw`active:(scale-95)`
      )}
    >
      {children}
    </a>
  </NextLink>
);

export default LinkButton;
