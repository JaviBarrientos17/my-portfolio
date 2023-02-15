import { Fragment } from "react";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <Fragment>
      {/* TODO MAKE WORK THIS FILE LOCATION */}
      <Script src="assets/js/TabNotification.js" defer />
      <Head>
        <title>Javi Barrientos Peralta | Portfolio</title>
        <meta
          name="description"
          content="Javi Barrientos Peralta | Portfolio"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* TODO UNCOMMENT THIS WHEN THERE IS CHRISTMAS */}
      {/* <script src="https://app.embed.im/snow.js" defer></S> */}
    </Fragment>
  );
}
