import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { validEmail, validPassword } from "../../lib/regex";
import { FaCheck } from "react-icons/fa";
import { useAuth } from "../../lib/AuthContext";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(true);
  const [passErr, setPassErr] = useState(true);

  const router = useRouter();
  const { login } = useAuth();

  const validate = () => {
    validEmail.test(userEmail) ? setEmailErr(false) : setEmailErr(true);

    validPassword.test(password) ? setPassErr(false) : setPassErr(true);
  };
  const handleSubmit = async () => {
    if (emailErr || passErr) {
      return;
    }
    await login(userEmail, password);
    router.push("/");
  };
  return (
    <div className="form-container">
      <form action="">
        <h2>Login</h2>
        <div className="input-container">
          <div>
            <label htmlFor="email">User email</label>
            {emailErr ? (
              <span>User email is invalid</span>
            ) : (
              <FaCheck className="green-icon" />
            )}
          </div>

          <input
            type="email"
            id="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            onKeyUp={validate}
            placeholder="Eg: abcd@gmail.com"
            required
          />
        </div>
        <div className="input-container">
          <div>
            <label htmlFor="password">Password</label>
            {passErr ? (
              <span>Password is invalid</span>
            ) : (
              <FaCheck className="green-icon" />
            )}
          </div>

          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onKeyUp={validate}
            required
          />
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
    </div>
  );
}

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
