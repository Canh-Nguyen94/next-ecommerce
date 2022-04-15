import React, { useContext} from "react";
import {useProduct} from "../lib/ProductContext"
function ProductQty() {
    
const {state, dispatch} = useProduct()
  return (
    <div>
      <span onClick={() => dispatch({ type: "decrease", value: 1 })}>-</span>
      <input value={state.productQty} onChange={(e)=>dispatch({ type: "fixNumber", value: e.target.value})}></input>
      <span onClick={() => dispatch({ type: "increase", value: 1 })}>+</span>
    </div>
  );
}

export default ProductQty;
