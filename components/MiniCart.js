import React,{ useContext} from 'react'
import {useProduct} from "../lib/ProductContext"
function MiniCart() {
    const {state, dispatch } = useProduct()
  return (
    <div>
        <h2>Minicart product</h2>
        {state.cartProducts.map(product =>{
            return(
                <div key={product.id}>
                    Id: {product.id}
                Name: {product.title}
                Quantity: {product.quantity}
                </div>
            )
        })}
        
    </div>
  )
}

export default MiniCart