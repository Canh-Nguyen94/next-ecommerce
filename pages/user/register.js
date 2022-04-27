import React, { useState } from "react";
import Link from "next/link";
import { validEmail, validPassword, validUser } from "../../lib/regex";
import { FaCheck } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import {fadeInUp} from "../../motion/pageTransition";
import {motion} from "framer-motion"

function Register() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [nameErr, setNameErr] = useState(true);
  const [emailErr, setEmailErr] = useState(true);
  const [passErr, setPassErr] = useState(true);
  const [confirmErr, setConfirmErr] = useState(true);

  const router = useRouter();
  const { register } = useAuth();
  const validate = () => {
    validEmail.test(userEmail) ? setEmailErr(false) : setEmailErr(true);

    validPassword.test(password) ? setPassErr(false) : setPassErr(true);

    validUser.test(userName) ? setNameErr(false) : setNameErr(true);
  };

  const confirmPassword = () => {
    password === passConfirm ? setConfirmErr(false) : setConfirmErr(true);
  };

  const handleSubmit = async () => {
    if (nameErr || emailErr || passErr || confirmErr) {
      return;
    }

    await register(userEmail, password);
    router.push("/");
  };
  return (
    <motion.div className="form-container" variants={fadeInUp} initial="hidden" animate="visible">
      <form autoComplete="off">
        <h2>Register</h2>
        <div className="input-container">
          <div>
            <label htmlhtmlFor="name">User name</label>
            {nameErr ? (
              <span>User name is invalid</span>
            ) : (
              <FaCheck className="green-icon" />
            )}
          </div>

          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              validate();
            }}
            placeholder="Eg: a|A1234567"
            required
          />
        </div>
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
        <div className="input-container">
          <div>
            <label htmlFor="confirm">Confirm password</label>
            {confirmErr ? (
              <span>Password must be the same</span>
            ) : (
              <FaCheck className="green-icon" />
            )}
          </div>

          <input
            type="password"
            id="confirm"
            value={passConfirm}
            onChange={(e) => {
              setPassConfirm(e.target.value);
            }}
            onKeyUp={confirmPassword}
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
            Register
          </button>

          <Link href="/user/login" passHref>
            <h4>
              Already have an acount?<span>Login</span>
            </h4>
          </Link>
        </div>
      </form>
    </motion.div>
  );
}

export default Register;

Register.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
