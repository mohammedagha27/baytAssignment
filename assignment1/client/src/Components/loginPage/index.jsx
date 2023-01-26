/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
// import React from 'react';
import "./style.css";
import { FaRegWindowClose } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import SearchLoading from "../loadingSpinner";

const Index = () => {
  const [user, setUser] = useOutletContext();
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({});
  const [loginError, setLoginError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const changeLoginFormData = (e) => {
    // eslint-disable-next-line no-unused-vars
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const loginReq = () => {
    setIsLoading(true);
    fetch("/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFormData),
    })
      .then((data) => data.json())
      .then((data) => {
        setIsLoading(false);
        if (data.error) {
          setLoginError(data);
        } else {
          setUser({ ...data, loggedIn: true, checking: false });
          navigate("/");
        }
      });
  };
  return (
    <div className="login-popup">
      <div className="login-container">
        {isLoading && <SearchLoading />}
        <div className="login-img" />
        <div className="login-content">
          <div className="login-header">
            <h3>Log In</h3>
            <p>
              By continuing, you agree to our User Agreement and Privacy Policy.
            </p>
          </div>
          <div className="login-sochial">
            <Link href="/">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="LgbsSe-Bz112c"
              >
                <g>
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                  <path fill="none" d="M0 0h48v48H0z" />
                </g>
              </svg>
              Continue with Google
            </Link>
          </div>
          <div className="divider">
            <span>OR</span>
          </div>
          <div className="login-body">
            <form action="/login" method="post" id="login">
              <div className="input-box">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  onChange={(e) => changeLoginFormData(e)}
                  className={loginError?.name === "email" ? "inputError" : ""}
                />
                <span className="errorLabel">
                  {loginError?.name === "email" ? loginError.error : ""}
                </span>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className={
                    loginError?.name === "password" ? "inputError" : ""
                  }
                  onChange={(e) => changeLoginFormData(e)}
                />
                <span className="errorLabel">
                  {loginError?.name === "password" ? loginError.error : ""}
                </span>
              </div>
              <button type="button" onClick={(e) => loginReq()}>
                Login
              </button>
            </form>
          </div>
          <div className="login-check">
            Dont Have Account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>

        <div className="login-close">
          <Link to="/">
            <FaRegWindowClose />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
