import { Fragment } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Javi Barrientos Peralta | Portfolio</title>
        <meta
          name="description"
          content="Javi Barrientos Peralta | Portfolio"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <div className="center">
        <h2>Home Page</h2>
      </div> */}
      {/* <div className="center text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <AiFillLinkedin />
      </div> */}
      <main className="px-10 dark:bg-gray-900 md:px-20 lg:px-40">

      </main>
      {/* TODO UNCOMMENT THIS WHEN THERE IS CHRISTMAS */}
      {/* <script src="https://app.embed.im/snow.js" defer></script> */}
    </Fragment>
  );
}
