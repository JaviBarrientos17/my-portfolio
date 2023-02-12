import { Fragment } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import ThemeToggle from "../components/ThemeToggle";

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
        {/* TODO UNCOMMENT THIS WHEN THERE IS CHRISTMAS */}
        {/* <script src="https://app.embed.im/snow.js" defer></script> */}
      </Fragment>
  );
}
