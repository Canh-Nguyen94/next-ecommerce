import React, { useState } from "react";
import Link from "next/link";
import {
  validEmail,
  validPassword,
  validPhone,
  validUser,
} from "../../lib/regex";
import { FaCheck } from "react-icons/fa";
import Nav from "../../components/Nav"

function Register() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [confirmErr, setConfirmErr] = useState(false);

  const validate = () => {
    if (!validEmail.test(userEmail)) {
      setEmailErr(true);
    }
    if (!validPassword.test(passWord)) {
      setPassErr(true);
    }
    if (!validUser.test(userName)) {
      setNameErr(true);
    }
    if (!validPhone.test(phone)) {
      setPhoneErr(true);
    }
  };

  const confirmPassWord = () => {
    if (passWord !== passConfirm) {
      setConfirmErr(true);
    }
  };
  return (
    <div className="form-container">
      <form action="">
        <h2>Register</h2>
        <div className="input-container">
          <div>
            <label for="name">User name</label>
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
            onChange={(e) => setUserName(e.target.value)}
            placeHolder="Eg: a|A1234567"
            required
          />
        </div>
        <div className="input-container">
          <div>
            <label for="email">User email</label>
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
            onChange={(e) => setUserEmail(e.target.value)}
            placeHolder="Eg: abcd@gmail.com"
            required
          />
        </div>
        <div className="input-container">
          <div>
            <label for="phone">Phone number</label>
            {phoneErr ? (
              <span>Phone number is invalid</span>
            ) : (
              <FaCheck className="green-icon" />
            )}
          </div>

          <input
            type="number"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeHolder="Eg: +84|84|0 979123456"
            required
          />
        </div>
        <div className="input-container">
          <div>
            <label for="password">Password</label>
            {passErr ? (
              <span>Password is invalid</span>
            ) : (
              <FaCheck className="green-icon" />
            )}
          </div>

          <input
            type="password"
            id="password"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <div>
            <label for="confirm">Confirm password</label>
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
            required
          />
        </div>
        <div className="form-button">
          <button
            className="button-black"
            onClick={(e) => {
              validate();
              confirmPassWord();
              e.preventDefault();
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
    </div>
  );
}

export default Register;

Register.getLayout = function PageLayout(page){
    return(
        <>
        <Nav/>
        {page}
        </>
    )
}