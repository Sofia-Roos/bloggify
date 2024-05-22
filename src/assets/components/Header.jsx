import { useContext } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signOutUser } from "../firebase/authFunctions";

const Header = () => {
  const { currentUser, userLoggedIn } = useContext(AuthContext);

  let navigate = useNavigate();
  const navigateToLogin = () => {
    let path = `login`;
    navigate(path);
  };

  return (
    <div className="header-container">
      <Link className="logo" to="/">
        BLOGGIFY
      </Link>
      <div className="link-menu">
        <Link className="link" to="/blogs">
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
          {userLoggedIn ? (
            <>
              <p className="username-header">{currentUser.email}</p>
              <button className="button-header" onClick={signOutUser}>
                Log out
              </button>
            </>
          ) : (
            <button className="button-header" onClick={navigateToLogin}>
              Log in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
