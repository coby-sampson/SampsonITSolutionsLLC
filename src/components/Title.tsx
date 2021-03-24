import { tw } from "twind";

export interface TitleProps {}

const Title: React.FC<TitleProps> = ({ children }) => (
  <h1 className={tw`text-xl font-publicsans font-bold`}>{children}</h1>
);

export default Title;
