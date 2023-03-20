import React from "react";
import { useProduct } from "../context/ProductContext";
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
        <h2>Your cart is empty hehe</h2>
      )}
    </div>
  );
}

export default Cart;
