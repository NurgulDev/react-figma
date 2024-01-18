import React from "react";
import { Link } from "react-router-dom";
import vin from "../../image/image 1.png";
import vin2 from "../../image/image 2.png";
const Rgister = () => {
  return (
    <section id="register">
      <div className="container">
        <div className="registr">
          <div className="registr-nav">
            <h1>Регистрация</h1>
            <div className="registr-input">
              <h3>Имя</h3>
              <input type="text" placeholder="Введите свое имя" />
            </div>
            <div className="registr-input">
              <h3>Фамилие</h3>
              <input type="text" placeholder="Введите свое фамилие" />
            </div>
            <div className="registr-input">
              <h3>Почта</h3>
              <input type="text" placeholder="Введите свою почту" />
            </div>
            <div className="registr-input">
              <h3>Пароль*</h3>
              <input type="password" placeholder="Введите свой пароль" />
              
            </div>
            <div className="registr-im">
              <input type="checkbox" />
              <h5>Согласен с Условиями</h5>
            </div>
         <div className="registr-bum">
         <button>Зарегистрироваться</button>
         </div>
            <div className="registr-nt">
              <hr className="hr1" />
              <h3>Или</h3>
              <hr className="hr2" />
            </div>

            <div className="registr-info">
              <div className="registr-info1">
                <img src={vin} alt="" />
                <h3>Google </h3>
              </div>
              <div className="registr-info2">
                <img src={vin2} alt="" />
                <h3>Fasebook </h3>
              </div>
            </div>
              <div className="reg-bt">
                <Link to="/">
                  <button>обратно</button>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rgister;
