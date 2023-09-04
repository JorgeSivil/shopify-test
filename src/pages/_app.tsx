import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout metadata={pageProps.metadata || {}}>
      <Component {...pageProps} />
    </Layout>
  );
}
