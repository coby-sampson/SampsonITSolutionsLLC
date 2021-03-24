import { DefaultSeo } from "next-seo";
import withTwindApp from "@twind/next/app";
import twindConfig from "../../twind.config";
import Nav from "../components/Nav";

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo title="Sampson IT Solutions LLC" />

      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default withTwindApp(twindConfig, App);
