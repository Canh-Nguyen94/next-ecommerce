import axios from "axios";
import Image from "next/image";
import React from "react";
import { FetchProduct } from "../../lib/fetch-product";
import ProductQty from "../../components/ProductQty";
import MiniCart from "../../components/MiniCart";
import { useProduct } from "../../lib/ProductContext";


function ProductDetail({ product }) {
  const { state, dispatch } = useProduct();
  return (
    <div>
      <div>
        <Image src={product.image} width={400} height={400} alt="image"></Image>
      </div>
      <div>
        <div>
          <h2>{product.title}</h2>
          <h4>{product.price}</h4>
        </div>       
          <ProductQty />
          <MiniCart />
        <button
          onClick={() =>
            dispatch({
              type: "addToCart",
              value: {
                id: product.id,
                title: product.title,
                quantity: state.productQty,
              },
            })
          }
        >
          Add to Cart
        </button>
        <button>Buy now</button>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await FetchProduct();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths: [...paths], fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
  const product = res.data;

  return { props: { product: product } };
}
export default ProductDetail;
