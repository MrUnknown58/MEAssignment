import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://static.wixstatic.com/media/5bc310_986847197cba4b5ebf919aad737b3f29~mv2.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
