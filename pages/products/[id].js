import axios from "axios";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { FetchProduct } from "../../lib/fetch-product";
import ProductQty from "../../components/ProductQty";
import MiniCart from "../../components/MiniCart";
import { useProduct } from "../../lib/ProductContext";
import { useAuth } from "../../lib/AuthContext";
import Notification from "../../components/Notification";

function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [success,setSuccess] = useState(false);
  const { state, dispatch } = useProduct();
  const { user } = useAuth();
  const router = useRouter();
  
  const handleClick = () => {
    if (!user) {
      alert("you need to login first");
      router.push("/user/login");
      return;
    }
    dispatch({
      type: "addToCart",
      value: {
        id: product.id,
        title: product.title,
        quantity: quantity,
      },
    });
    setSuccess(true);
    
    setTimeout(()=>{setSuccess(false)},2000)
  };
  return (
    <div className="detail">
      
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
