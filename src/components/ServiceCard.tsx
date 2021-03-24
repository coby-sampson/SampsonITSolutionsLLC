import { tw } from "twind";
import { FiActivity } from "react-icons/fi";
import Title from "../components/Title";
import Body from "../components/Body";

export interface ServiceCardProps {}

const ServiceCard: React.FC<ServiceCardProps> = () => {
  return (
    <>
      <FiActivity className={tw`mx-auto h-12 w-12`} />

      <div className={tw`flex flex-col space-y-2`}>
        <Title>Service Title</Title>
        <Body>
          This is the body also known as the description of a service.
        </Body>
      </div>
    </>
  );
};

export default ServiceCard;
