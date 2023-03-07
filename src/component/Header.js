import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import foodLogo from '../assets/food-logo.jpeg';
const Title = () => (
  <a href="/">
    <img src={foodLogo} alt="logo" className="logo" />
  </a>
);

const HeaderComponent = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">
            Home
            </Link>
          </li>
          <li>
            <Link to="/about" >
            About
            </Link>
          </li>
          <li>
            <Link to="/contact" >
            Contact
            </Link>
          </li>
          <li>Cart</li>
          <li>
            {/* use conditional rendering for login and logout */}
            {loggedIn ? (
              <button
                className="logout-btn"
                onClick={() => setLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Log In</button>
      )}
    </div>
  );
};

export default HeaderComponent;
