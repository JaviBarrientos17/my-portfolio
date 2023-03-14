import { Fragment } from "react";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <Fragment>
      <Head>
        {/* TODO FIND WHY THIS SCRIPT DOES NOT LOAD PROPERLY */}
        {/* <Script type="text/javascript" src="../public/static/TabNotification.js" defer/> */}
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
