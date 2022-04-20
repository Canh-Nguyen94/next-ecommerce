import "../styles/globals.scss";
import ProductProvider from "../lib/ProductContext";
import Layout from "../components/Layout";
import AuthContextProvider from "../lib/AuthContext";
import Nav from "../components/Nav";
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <ProductProvider>
        <AuthContextProvider>
          <Nav/>
          <Component />
        </AuthContextProvider>
      </ProductProvider>
    );
  }
  return (
    <ProductProvider>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </ProductProvider>
  );
}

export default MyApp;
