import React,{ useContext,useReducer} from 'react';

export const CartContext = React.createContext();
const initialState = {
    cartProducts: []
  };
  const productReducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return { ...state, productQty: state.productQty + action.value }
      case "decrease":
        return { ...state, productQty: state.productQty - action.value }
      case "fixNumber": return{...state,productQty: action.value}
      case "addToCart": return{...state,cartProducts: [...state.cartProducts,action.value]}
        default:
        return state;
    }
  };

  export const useProduct =()=>useContext(CartContext);

  function ProductProvider({ children }) {
    const [state, dispatch] = useReducer(productReducer, initialState);
    console.log("cart",state.cartProducts)
    
    return <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
  }

  export default ProductProvider;