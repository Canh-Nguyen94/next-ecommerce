import "../styles/globals.scss";
import ProductProvider from "../context/ProductContext";
import Layout from "../components/Layout";
import AuthContextProvider from "../context/AuthContext";
import ScrollContextProvider from "../context/ScrollContext";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

function Loading() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.asPath && setLoading(true);
    };
    const handleComplete = (url) => {
      url === router.asPath && setLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div className="loading">
        <h2>...Loading</h2>
      </div>
    )
  );
}

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <ProductProvider>
        <AuthContextProvider>
          <ScrollContextProvider>
            <AnimatePresence exitBeforeEnter>
              <Nav />
              <NextNProgress
                startPosition={0.5}
                stopDelayMs={300}
                height={5}
                showOnShallow={true}
              />

              <Component />
            </AnimatePresence>
          </ScrollContextProvider>
        </AuthContextProvider>
      </ProductProvider>
    );
  }
  return (
    <ProductProvider>
      <AuthContextProvider>
        <ScrollContextProvider>
          <AnimatePresence exitBeforeEnter>
            <Layout>
              <NextNProgress
                startPosition={0.5}
                stopDelayMs={300}
                height={5}
                showOnShallow={false}
              />

              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
        </ScrollContextProvider>
      </AuthContextProvider>
    </ProductProvider>
  );
}

export default MyApp;
