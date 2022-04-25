import React, { useContext } from "react";
import { useProduct } from "../context/ProductContext";
function MiniCart() {
  const { state, dispatch } = useProduct();
  return (
    <div>
      <h2>Minicart product</h2>
      {state.cartProducts.length?state.cartProducts.map((product) => {
        return (
          <div key={product.id}>
            Id: {product.id}
            Name: {product.title}
            Quantity: {product.quantity}
          </div>
        );
      }):null}
    </div>
  );
}

export default MiniCart;
