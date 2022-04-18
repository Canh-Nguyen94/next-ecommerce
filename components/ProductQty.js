import React, { useContext} from "react";
function ProductQty({quantity,setQuantity}) {

  return (
    <div>
      <span onClick={() => setQuantity(quantity=>quantity-1)}>-</span>
      <input value={quantity} onChange={(e)=>setQuantity(e.target.value)}></input>
      <span onClick={() => setQuantity(quantity=>quantity+1)}>+</span>
    </div>
  );
}

export default ProductQty;
