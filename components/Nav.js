import React from 'react'
import { FaSearch,FaArrowRight } from 'react-icons/fa';
function Nav() {
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
        <ul>
            <li>User Name</li>
            <li>Cart</li>
            <li>Sign out</li>
        </ul>
    </div> 
    </div>
  )
}

export default Nav