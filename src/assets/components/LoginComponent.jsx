import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signInUser } from "../firebase/authFunctions";
import "./LoginComponent.css";

const LoginComponent = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await signInUser(email, password);
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  return (
    <div className="login-container">
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <main>
        <div>
          <div>
            <h2 className="login-h2">Log in</h2>
          </div>
          <form onSubmit={onSubmit}>
            <div>
              <label className="login-label">Email</label>
              <input
                className="login-input"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div>
              <label className="login-label">Password</label>
              <input
                className="login-input"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {errorMessage && <span>{errorMessage}</span>}

            <button
              className="button-login"
              type="submit"
              disabled={isSigningIn}
            >
              {isSigningIn ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p>
            Don't have an account? <Link to={"/register"}>Sign up here!</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginComponent;
