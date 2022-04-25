import ProductCard from "../../components/ProductCard";
import { FetchProduct } from "../../lib/fetch-product";
import { motion } from "framer-motion";
import { fadeInDown, staggerVariants } from "../../motion/pageTransition";

function Products({ products }) {
  return (
    <>
      <motion.div
        className="products"
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const products = await FetchProduct();
  return {
    props: { products: products },
  };
}

export default Products;
