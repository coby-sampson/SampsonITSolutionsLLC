import { tw } from "twind";
import { NextSeo } from "next-seo";
import ServiceCard from "../components/ServiceCard";
import { SITService } from "../models/service";

const services: SITService[] = [
  {
    title: "Service Title",
    description: "this is a description of the service!",
  },
  {
    title: "Service Title",
    description: "this is a description of the service!",
  },
];

export const HomePage = () => (
  <>
    <NextSeo
      title="Sampson IT Solutions LLC - Home Page"
      description="Welcome to Sampson IT Solu..."
    />
    <main className={tw`divide-y-2 divide-solid`}>
      <section className={tw`flex items-center justify-evenly space-x-8`}>
        {services.map((s) => (
          <article className={tw`text-center space-y-8`}>
            <ServiceCard {...s} />
          </article>
        ))}
      </section>
    </main>
  </>
);

export default HomePage;
