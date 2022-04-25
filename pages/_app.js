import "../styles/globals.scss";
import ProductProvider from "../lib/ProductContext";
import Layout from "../components/Layout";
import AuthContextProvider from "../lib/AuthContext";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";

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
          <Nav />
          <NextNProgress
            startPosition={0.5}
            stopDelayMs={300}
            height={5}
            showOnShallow={true}
          />

          <Component />
        </AuthContextProvider>
      </ProductProvider>
    );
  }
  return (
    <ProductProvider>
      <AuthContextProvider>
        <Layout>
          <NextNProgress
            startPosition={0.5}
            stopDelayMs={300}
            height={5}
            showOnShallow={false}
          />

          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </ProductProvider>
  );
}

export default MyApp;
