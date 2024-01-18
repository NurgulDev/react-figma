import React from "react";
import Blocks from "../../../Consultasia/Blocks";
import { IoSearchSharp } from "react-icons/io5";
import nini1 from "../../../image/Ellipse 2.svg";
import { Link } from "react-router-dom";

const Tini = () => {
  return (
    <section id="abi">
      <div className="container">
        <div className="abi">
          <div className="abi-nav">
            <Blocks />
          </div>

          <div className="abi-boe">
            <div className="abi-he">
              <h3>Чаты</h3>
              <div className="search">
                <IoSearchSharp style={{ width: "24px", height: "24px" }} />
                <h3>Поиск</h3>
              </div>
            </div>
            <div className="abi-mines">
              <div className="abi-card">
                <img src={nini1} alt="" />
                <div className="abi-name">
                  <h3>Бека</h3>
                  <p>Где ты?</p>
                </div>
                <div className="abi-am">
                  <h5>Сегодня, 8:56</h5>
                </div>
              </div>
              <div className="abi-card">
                <img src={nini1} alt="" />
                <div className="abi-name">
                  <h3>Бека</h3>
                  <p>Где ты?</p>
                </div>
                <div className="abi-am">
                  <h5>Сегодня, 8:56</h5>
                </div>
              </div>
              <div className="abi-card">
                <img src={nini1} alt="" />
                <div className="abi-name">
                  <h3>Бека</h3>
                  <p>Где ты?</p>
                </div>
                <div className="abi-am">
                  <h5>Сегодня, 8:56</h5>
                </div>
              </div>
              <div className="abi-card">
                <img src={nini1} alt="" />
                <div className="abi-name">
                  <h3>Бека</h3>
                  <p>Где ты?</p>
                </div>
                <div className="abi-am">
                  <h5>Сегодня, 8:56</h5>
                </div>
              </div>
              <div className="abi-card">
                <img src={nini1} alt="" />
                <div className="abi-name">
                  <h3>Бека</h3>
                  <p>Где ты?</p>
                </div>
                <div className="abi-am">
                  <h5>Сегодня, 8:56</h5>
                </div>
              </div>
              <div className="abi-card">
                <img src={nini1} alt="" />
                <div className="abi-name">
                  <h3>Бека</h3>
                  <p>Где ты?</p>
                </div>
                <div className="abi-am">
                  <h5>Сегодня, 8:56</h5>
                </div>
              </div>
              <div className="abi-card">
                <img src={nini1} alt="" />
                <div className="abi-name">
                  <h3>Бека</h3>
                  <p>Где ты?</p>
                </div>
                <div className="abi-am">
                  <h5>Сегодня, 8:56</h5>
                </div>
              </div>
              <div className="abi-card">
                <img src={nini1} alt="" />
                <div className="abi-name">
                  <h3>Бека</h3>
                  <p>Где ты?</p>
                </div>
                <div className="abi-am">
                  <h5>Сегодня, 8:56</h5>
                </div>
              </div>
              <div className="abi-card">
                <img src={nini1} alt="" />
                <div className="abi-name">
                  <h3>Бека</h3>
                  <p>Где ты?</p>
                </div>
                <div className="abi-am">
                  <h5>Сегодня, 8:56</h5>
                </div>
              </div>
            </div>
            <div className="abi-btn">
              <Link   to="/">
                <button>обратно</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tini;
