import { tw } from "twind";

export interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <a
      className={tw`bg-gray-800 px-4 py-2 text-white rounded-xl font-publicsans`}
      target="_top"
      href="https://square.site/book/4EAHPMD825X8K/sampson-it-solutions-llc%22%3EBook an Appointment"
    >
      {children}
    </a>
  );
};

export default Button;
