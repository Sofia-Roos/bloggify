import { useContext } from "react";
import "./Header.css";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { userName, isLoggedIn, login, logout } = useContext(UserContext);
  return (
    <div className="header-container">
      <h1 className="logo">BLOGGIFY</h1>
      <div className="link-menu">
        <Link className="link" to="/">
          Blogs
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/mypage">
          My Page
        </Link>
      </div>

      <div className="button-container">
        <div className="button-component">
          {isLoggedIn ? (
            <>
              <p className="username-header">{userName}</p>
              <button className="button-header" onClick={logout}>
                Log out
              </button>
            </>
          ) : (
            <button className="button-header" onClick={login}>
              Log in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
