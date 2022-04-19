import axios from "axios";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { FetchProduct } from "../../lib/fetch-product";
import ProductQty from "../../components/ProductQty";
import MiniCart from "../../components/MiniCart";
import { useProduct } from "../../lib/ProductContext";

function ProductDetail({ product }) {
  const { state, dispatch } = useProduct();
  const [quantity, setQuantity] = useState(1);

  const handleClick = () => {
    dispatch({
      type: "addToCart",
      value: {
        id: product.id,
        title: product.title,
        quantity: quantity,
      },
    });
  };
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
        <ProductQty quantity={quantity} setQuantity={setQuantity} />
        <MiniCart />
        <button onClick={handleClick}>Add to Cart</button>
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
  const res = await axios.get(
    `https://625e7950873d6798e2a80ac8.mockapi.io/api/v1/products/${params.id}`
  );
  const product = res.data;

  return { props: { product: product } };
}
export default ProductDetail;
