import React from "react";
import hey1 from "../../image/hey1.png";
import vinw from "../../image/image 1.png";
import vinw2 from "../../image/image 2.png";
import { Link } from "react-router-dom";

const Vin = () => {
  return (
    <section id="vam">
      <div className="container">
        <div className="vam">
          <div className="vam-nav">
            <img src={hey1} alt="" />
          </div>
          <div className="vam-box">
            <h1>Добро пожаловать</h1>
            <div className="registr-input">
              <h3>Почта</h3>
              <input type="text" placeholder="Введите свою почту" />
            </div>
            <div className="registr-input">
              <h3>Пароль*</h3>
              <input type="password" placeholder="Введите свой пароль" />
            </div>
            <div className="registr-bum">
              <button style={{ width: "502px" , marginTop:'2pc'}}>Вход</button>
            </div>
            <div className="vam-ban">
              <h3>
                У вас нет аккаунта? <span>Зарегистрироваться</span>
              </h3>
            </div>
            <div className="registr-nt">
              <hr className="hr1" />
              <h3>Или</h3>
              <hr className="hr2" />
            </div>

            <div className="registr-info">
              <div className="registr-info1">
                <img src={vinw} alt="" />
                <h3>Google </h3>
              </div>
              <div className="registr-info2">
                <img src={vinw2} alt="" />
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

export default Vin;
