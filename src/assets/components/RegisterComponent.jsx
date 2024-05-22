import React, { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { createUser } from "../firebase/authFunctions";
import "./RegisterComponent.css";

const RegisterComponent = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await createUser(email, password);
      } catch (error) {
        setErrorMessage(error.message);
        setIsRegistering(false);
      }
    }
  };

  return (
    <div className="register-container">
      {userLoggedIn && <Navigate to={"/"} replace={true} />}

      <main>
        <div>
          <div>
            <div>
              <h2 className="register-h2">Create a new account</h2>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div>
              <label className="register-label">Email</label>
              <input
                className="register-input"
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
              <label className="register-label">Password</label>
              <input
                className="register-input"
                disabled={isRegistering}
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div>
              <label className="register-label">Confirm Password</label>
              <input
                className="register-input"
                disabled={isRegistering}
                type="password"
                autoComplete="off"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              />
            </div>

            {errorMessage && <span>{errorMessage}</span>}

            <button
              className="button-register"
              type="submit"
              disabled={isRegistering}
            >
              {isRegistering ? "Signing Up..." : "Sign Up"}
            </button>
            <div className="register-text">
              Already have an account? {"   "}
              <Link to={"/login"}>Continue</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegisterComponent;
