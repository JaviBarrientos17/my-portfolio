import { ChakraProvider } from "@chakra-ui/react";
import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Script from "next/script";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Fragment>
        <Head>
          <Script type="text/javascript" src="../public/static/TabNotification.js" defer/>
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </Fragment>
    </ChakraProvider>
  );
}

export default MyApp;
