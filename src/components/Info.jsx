import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero-nav">
            <h1>Ваш универсальный <br /> инструмент для успеха в учебе</h1>
            <Link to="/register">
            
            <button>Зарегистрироваться</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
