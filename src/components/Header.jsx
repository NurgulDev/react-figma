import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <h1>
              Student <br /> Space
            </h1>
          </div>
          <div className="header-a">
            <Link to="/consultasia">
              <a href="#">Консультация</a>
            </Link>
            <Link  to="/chack">
              <a href="#">Контакты</a>
            </Link>

            <Link to="/vam">
              <button>Войти</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
