import React, { useContext } from "react";
import Link from "next/link";
import { useProduct } from "../lib/ProductContext";
import { FaSearch } from "react-icons/fa";

function Nav() {
  const { state, dispatch } = useProduct();
console.log("State",state)
  let productsQuantity = 0;
  if (state) {
    productsQuantity = state.cartProducts.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
  }

  return (
    <div className="nav">
      <Link href="/" passHref>
        <div className="nav-logo">Logo</div>
      </Link>
      <div className="nav-search">
        <input type="text" />
        <button>
          <FaSearch />
        </button>
      </div>
      <div className="nav-user">
        <Link href="/user/login">
          <div>Login/Register</div>
        </Link>

        <Link href="/cart" passHref>
          <div className="cart">
            Cart
            <span className="cart-badge">{productsQuantity}</span>
          </div>
        </Link>

        <div>Sign out</div>
      </div>
    </div>
  );
}

export default Nav;
