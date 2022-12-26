import Script from "next/script";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://app.embed.im/snow.js" />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
