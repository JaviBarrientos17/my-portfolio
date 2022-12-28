import Script from "next/script";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* TODO SNOW JS SCRIPT */}
      <Script src="https://app.embed.im/snow.js" defer></Script>
      {/* TODO SEARCH HOW TO CHANGE THE TAB ICON */}
      <link
        rel="shortcut icon"
        href="https://avatars.githubusercontent.com/u/44582104?v=4"
      />
      <title>Javi Barrientos Peralta | Portfolio</title>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
