import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp} from "../motion/pageTransition";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <Link href={`/products/${product.id}`} passHref key={product.id}>
        <motion.div
          className="product"
          key={product.id}
          variants={fadeInUp}
        >
          <Image
            src={product.image}
            width={500}
            height={500}
            alt="image"
          ></Image>

          <h3>{product.title}</h3>
          {<h4>{product.price}</h4>}
          <div className="button-container">
            <button className="button-blue">View details</button>
            <button className="button-blue" onClick={handleClick}>
              Add to cart
            </button>
          </div>
        </motion.div>
      </Link>
    </>
  );
}

export default ProductCard;
