import React, { useState } from "react";
import Link from "next/link";
import { useProduct } from "../lib/ProductContext";
import { useAuth } from "../lib/AuthContext";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

function Nav() {
  const { state, dispatch } = useProduct();
  const { user, logOut } = useAuth();
  const router = useRouter();
  let productsQuantity = 0;
  if (state) {
    productsQuantity = state.cartProducts.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
  }
  const handleLogOut = async () => {
    await logOut();
    dispatch({ type: "resetCart", value: {} });
    productsQuantity = 0;
    router.push("/user/login");
  };

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
        {user ? (
          <div className="nav-email">{user.name||user.email}</div>        
        ) : (
          <Link href="/user/login" passHref>
            <div>Login/Register</div>
          </Link>
        )}

        <Link href="/cart" passHref>
          <div className="cart">
            Cart
            <span className="cart-badge">{productsQuantity}</span>
          </div>
        </Link>
        {user ? <div onClick={handleLogOut}>Sign out</div> : null}
      </div>
    </div>
  );
}

export default Nav;
