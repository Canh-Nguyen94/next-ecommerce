import "../styles/globals.scss";
import ProductProvider from "../lib/ProductContext";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component />)
  }
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}

export default MyApp;
