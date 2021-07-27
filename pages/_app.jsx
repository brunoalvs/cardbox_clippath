import Head from "next/head";
import "./reset.css";

export default function Home({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CardBox</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
