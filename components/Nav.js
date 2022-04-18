import React from 'react'
import Link from "next/link"
import { useProduct } from "../lib/ProductContext";
import { FaSearch} from 'react-icons/fa';
function Nav() {
  const {state,dispatch} = useProduct()
  const productsQuantity = state.cartProducts.reduce((sum,product)=>(sum + product.quantity),0)
  console.log("productsQty", productsQuantity)
  return (
    <div className="nav">
    <div className="nav-logo">
        Logo
    </div>
    <div className="nav-search">
        <input type="text"/>
        <button><FaSearch/></button>
    </div>
    <div className="nav-user">   
            <div>User Name</div>
            <Link href="/cart" passHref>
              <div className="cart">
              Cart
              <span className="cart-badge">{productsQuantity}</span>
            </div> 
            </Link>
                    
            <div>Sign out</div>

    </div> 
    </div>
  )
}

export default Nav