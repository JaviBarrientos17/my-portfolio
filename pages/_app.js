import { ChakraProvider } from "@chakra-ui/react";
import { Fragment } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Fragment>
        <Navbar />
        <Component {...pageProps} />
      </Fragment>
    </ChakraProvider>
  );
}

export default MyApp;
