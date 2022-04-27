import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import {fadeInUp} from "../../motion/pageTransition";
import {motion} from "framer-motion"

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async () => {
    await login(userEmail, password);
    router.push("/");
  };
  return (
    <motion.div className="login-container" variants={fadeInUp} initial="hidden" animate="visible">
      <form action="">
        <h2>Login</h2>
        <div className="form-section">
          <input
            type="text"
            id="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            required
          />
          <label htmlFor="email">User email</label>
        </div>
        <div className="form-section">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-button">
          <button
            className="button-blue"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Login
          </button>
          <Link href="/user/register" passHref>
            <h4>
              Don't have an account?<span>Register</span>
            </h4>
          </Link>
        </div>
      </form>
    </motion.div>
  );
}

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
