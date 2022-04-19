import React, { useContext, useReducer } from "react";

const ProductContext = React.createContext({});

const initialState = {
  cartProducts: [],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      let alreadyAdded = true;
      console.log("test", state.cartProducts[0]);
      console.log("action", action.value);
      const inCartProduct = state.cartProducts.find(
        (product) => product.id === action.value.id
      );
      console.log("inCartProduct", inCartProduct);

      if (inCartProduct) {
        const newState = state.cartProducts.map((product) => {
          if (product.id === action.value.id) {
            product.quantity += action.value.quantity / 2;
            console.log("value", action.value.quantity);
            console.log("quantity", product.quantity);
            console.log("product", product);
            return product;
          } else {
            return product;
          }
        });
        console.log("update", newState);
        return { ...state };
      } else {
        alreadyAdded = false;
      }

      if (!state.cartProducts.length || !alreadyAdded) {
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.value],
        };
      }

    default:
      return state;
  }
};

export const useProduct = () => useContext(ProductContext);

function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
