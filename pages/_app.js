import "../styles/globals.css";
import "@fontsource/space-grotesk";
// import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    // <SessionProvider session={session}>
    <Component {...pageProps} />
    // </SessionProvider>
  );
}

export default MyApp;
