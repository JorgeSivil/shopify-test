import { ChakraProviders } from "@/components/Chakra/ChakraProviders";
import Header from "@/components/Layout/Header";
import Head from "next/head";

const Layout = ({ children, metadata }) => {
  return (
    <ChakraProviders>
      <Head>
        <title>{`${metadata.title}- My Shopify Store`}</title>
      </Head>
      <Header />
      <main>{children}</main>
    </ChakraProviders>
  );
};

export default Layout;
