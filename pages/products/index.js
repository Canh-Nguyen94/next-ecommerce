import ProductCard from "../../components/ProductCard";
import { FetchProduct } from "../../lib/fetch-product";

function Products({ products }) {
  return (
    <>
      <div>
        <h1>All products</h1>
      </div>

      <div className="products">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
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
