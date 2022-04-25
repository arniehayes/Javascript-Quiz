import '../styles/globals.scss'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" type="text/css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
