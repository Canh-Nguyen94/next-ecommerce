import React, { useContext, useReducer } from "react";
export const ProductContext = React.createContext();
const initialState = {
  cartProducts: [],
};
const productReducer = (state, action) => {
  switch (action.type) {
    case "addToCart":
      let alreadyAdded = true;
        console.log("test",state.cartProducts)
        const inCartProduct = state.cartProducts.find(product=>
          product.id === action.value.id
        );
        console.log("inCartProduct", inCartProduct)
        if(inCartProduct){
          state.cartProducts.forEach(product=>{
            if(product.id === action.value.id){
              console.log("equal",action.value.quantity)
              product.quantity += action.value.quantity
              console.log("quantity",product.quantity)
            }
          }
          
          )
          console.log("update",state.cartProducts)
          return {...state,cartProducts: [...state.cartProducts]}
        }else{alreadyAdded = false}

        if(!state.cartProducts.length||!alreadyAdded){
          console.log("push", typeof state.cartProducts)
          return {...state,cartProducts:[...state.cartProducts, action.value]}
        }
      ;

    default:
      return state;
  }
};

export const useProduct = () => useContext(ProductContext);

function ProductProvider({ children }) {
  
  const [state, dispatch] = useReducer(productReducer, initialState);
console.log("rerender")
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
