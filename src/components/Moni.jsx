import React from "react";
import person from "../image/Rectangle 15.png";
import person2 from "../image/Rectangle 16.png";
import person3 from "../image/Rectangle 17.png";
import person4 from "../image/Rectangle 19.png";
import person5 from "../image/Rectangle 18.png";
import person6 from "../image/Rectangle 20.png";

const Moni = () => {
  return (
    <section id="bim">
      <div className="container">
        <div className="bim">
          <div className="bim-nav">
            <img src={person} alt="" />
          </div>
          <div className="bim-box">
            <img src={person2} alt="" />

            <div className="bim-kill">
              <div className="bim-bul">
                <img src={person3} alt="" />
                <img src={person4} alt="" />
              </div>
              <div className="bim-hel">
                <img src={person5} alt="" />
                <img src={person6} alt="" />
              </div>
            </div>
          </div>

          <div className="bim-txt">
            <h1>Приближает вас к людям, <br /> и вещам которые вы любите</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moni;
