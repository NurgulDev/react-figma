import React from 'react';
import per1 from "../image/Ellipse 1.svg"


const Blocks = () => {
    return (
      <section id="blocks">
        <div className="container">
            <div className="blocks">
                <div className="blocks-nav">
                    <div className="block-person">
                        <img src={per1} alt="" />
                        <div className="block-name">
                            <h3>Алия Акматова</h3>
                            <h5>Студент УЦА</h5>
                        </div>
                    </div>
                    <hr className='person' />
                    <div className="block-a">
                        <a href="#">Новости</a>
                        <a href="#">Вопросы</a>
                        <a href="#">Нетворкинг</a>
                        <a href="#">Учебные комнаты</a>
                        <a href="#">Мероприятия</a>
                        <a href="#">Чаты</a>
                        <a href="#">Работа</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
};

export default Blocks;