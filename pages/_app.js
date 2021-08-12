import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = (...args) =>
      console.log("routeChangeStart", ...args);
    const handleRouteChangeComplete = (...args) =>
      console.log("routeChangeComplete", ...args);
    const handleRouteChangeError = (...args) =>
      console.log("routeChangeError", ...args);

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
