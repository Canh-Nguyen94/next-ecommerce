import React, { useContext, useReducer } from "react";

export const ProductContext = React.createContext({});

const initialState = {
  cartProducts: [],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      let alreadyAdded = true;

      const inCartProduct = state.cartProducts.find(
        (product) => product.id === action.value.id
      );

      if (inCartProduct) {
        const newState = state.cartProducts.map((product) => {
          if (product.id === action.value.id) {
            product.quantity += action.value.quantity / 2;

            return product;
          } else {
            return product;
          }
        });

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
    case "resetCart":
      return { ...state, cartProducts: [] };
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
