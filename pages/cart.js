import React from "react";
import { useProduct } from "../lib/ProductContext";
function Cart() {
  const { state, dispatch } = useProduct();
  return (
    <div>
      {state.cartProducts.length ? (
        state.cartProducts.map((product) => {
          return (
            <div key={product.id}>
              Id: {product.id}
              Name: {product.title}
              Quantity: {product.quantity}
            </div>
          );
        })
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </div>
  );
}

export default Cart;
