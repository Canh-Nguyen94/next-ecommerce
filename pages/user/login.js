import React from 'react'
import Link from "next/link"
import Nav from "../../components/Nav"

function Login() {
  return (
    <div className="form-container">
        <form action="">
            <h2>Login</h2>
            <div className="input-container">
                <div><label for="email">User email</label></div>
                
                <input type="email" id="email" required/>               
            </div>
            <div className="input-container">
                <div><label for="password">Password</label></div>
                
                <input type="password" id="password" required/>
                
            </div>
            <div className="form-button">
                <button className="button-blue">Login</button>
                <Link href="/user/register"><h4>Don't have an account?<span>Register</span></h4></Link>
                
            </div>
        </form>
    </div>
  )
}

export default Login

Login.getLayout = function PageLayout(page){
    return(
        <>
        <Nav/>
        {page}
        </>
    )
}