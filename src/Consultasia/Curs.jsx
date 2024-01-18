import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import ami from "../image/Rectangle 22.png";
import { BsCircleFill } from "react-icons/bs";
import { GiHandBag } from "react-icons/gi";
import { BiCalendar } from "react-icons/bi";
import { Link } from "react-router-dom";

const Curs = () => {
  return (
    <section id="math">
      <div className="container">
        <div className="math">
          <div className="math-nav">
            <div className="math-vidio">
              <MdSlowMotionVideo
                style={{ fontSize: "20px", marginRight: "0.4pc" }}
              />
              <h3>Все Курсы</h3>
              <div className="math-vidio1">
                <MdSlowMotionVideo
                  style={{
                    fontSize: "20px",
                    marginRight: "0.4pc",
                    color: " #000000a4",
                  }}
                />
                <h3>2023 Новые</h3>
              </div>
            </div>
            <div className="math-pul">
              <h1>Курсы</h1>
            </div>
            <div className="math-box">
              <div className="math-mini">
                <div className="math-card">
                  <img src={ami} alt="" />
                  <div className="math-txt">
                    <div className="math-icon">
                      <BsCircleFill
                        style={{
                          width: "10px",
                          height: "10px",
                          color: "#A2E66C",
                          marginLeft: "1pc",
                        }}
                      />
                      <h3>Математика</h3>
                    </div>
                    <div className="math-btn">
                      <button className="year">2023</button>
                      <button className="october">Октябрь</button>
                    </div>
                  </div>
                </div>
                <div className="math-card">
                  <img src={ami} alt="" />
                  <div className="math-txt">
                    <div className="math-icon">
                      <BsCircleFill
                        style={{
                          width: "10px",
                          height: "10px",
                          color: "#A2E66C",
                          marginLeft: "1pc",
                        }}
                      />
                      <h3>Математика</h3>
                    </div>
                    <div className="math-btn">
                      <button className="year">2023</button>
                      <button className="october">Октябрь</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="math-mini">
                <div className="math-card">
                  <img src={ami} alt="" />
                  <div className="math-txt">
                    <div className="math-icon">
                      <BsCircleFill
                        style={{
                          width: "10px",
                          height: "10px",
                          color: "#A2E66C",
                          marginLeft: "1pc",
                        }}
                      />
                      <h3>Математика</h3>
                    </div>
                    <div className="math-btn">
                      <button className="year">2023</button>
                      <button className="october">Октябрь</button>
                    </div>
                  </div>
                </div>
                <div className="math-card">
                  <img src={ami} alt="" />
                  <div className="math-txt">
                    <div className="math-icon">
                      <BsCircleFill
                        style={{
                          width: "10px",
                          height: "10px",
                          color: "#A2E66C",
                          marginLeft: "1pc",
                        }}
                      />
                      <h3>Математика</h3>
                    </div>
                    <div className="math-btn">
                      <button className="year">2023</button>
                      <button className="october">Октябрь</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="math-hero">
              <GiHandBag style={{ fontSize: "20px", marginRight: "0.4pc" }} />
              <h2>Список дел</h2>
              <BiCalendar
                style={{
                  fontSize: "20px",
                  marginRight: "0.4pc",
                  color: " #000000a4",
                }}
              />
              <h3>Календарь</h3>
            </div>
            <div className="math-kill">
              <h1>Список</h1>
            </div>
            <div className="math-long">
              <div className="m-lk">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 5C5.897 5 5 5.897 5 7V17C5 18.103 5.897 19 7 19H17C18.103 19 19 18.103 19 17V7C19 5.897 18.103 5 17 5H7ZM7 17V7H17L17.002 17H7Z"
                    fill="black"
                    fill-opacity="0.4"
                  />
                </svg>
                <h4>Сделать</h4>
              </div>
              <div className="m-lk2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V5C21 3.897 20.103 3 19 3H5C3.897 3 3 3.897 3 5ZM19.001 19H5V5H19L19.001 19Z"
                    fill="#57B9FC"
                  />
                  <path
                    d="M11 7H13V17H11V7ZM15 10H17V17H15V10ZM7 12H9V17H7V12Z"
                    fill="#57B9FC"
                  />
                </svg>
                <h4>В процессе 2</h4>
              </div>
              <div className="m-lk3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 5C5.897 5 5 5.897 5 7V17C5 18.103 5.897 19 7 19H17C18.103 19 19 18.103 19 17V7C19 5.897 18.103 5 17 5H7ZM7 17V7H17L17.002 17H7Z"
                    fill="#5FBC5F"
                  />
                  <path
                    d="M10.996 12.5561L9.70005 11.2851L8.30005 12.7151L11.004 15.3621L15.703 10.7111L14.297 9.28906L10.996 12.5561Z"
                    fill="#5FBC5F"
                  />
                </svg>
                <h4>Завершено 2</h4>
              </div>
            </div>
            <div className="math-nim">
              <h1> + Добавить</h1>
            </div>

            <div className="math-main">
              <div className="math-tommi"></div>
              <div className="math-num">
                <div className="math-mat">
                  <div className="math-m">
                    <div className="math-t">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M12.4394 5.36625C12.4097 5.29842 12.3683 5.23641 12.3169 5.18313L8.56687 1.43312C8.51359 1.38174 8.45158 1.34026 8.38375 1.31062C8.365 1.30187 8.345 1.29687 8.325 1.29C8.2727 1.2722 8.21826 1.26148 8.16313 1.25813C8.15 1.25688 8.13812 1.25 8.125 1.25H3.75C3.06062 1.25 2.5 1.81062 2.5 2.5V12.5C2.5 13.1894 3.06062 13.75 3.75 13.75H11.25C11.9394 13.75 12.5 13.1894 12.5 12.5V5.625C12.5 5.61188 12.4931 5.6 12.4919 5.58625C12.4888 5.53107 12.4781 5.47659 12.46 5.42438C12.4538 5.40438 12.4481 5.385 12.4394 5.36625ZM10.3663 5H8.75V3.38375L10.3663 5ZM3.75 12.5V2.5H7.5V5.625C7.5 5.79076 7.56585 5.94973 7.68306 6.06694C7.80027 6.18415 7.95924 6.25 8.125 6.25H11.25L11.2513 12.5H3.75Z"
                          fill="black"
                        />
                        <path
                          d="M5 7.5H10V8.75H5V7.5ZM5 10H10V11.25H5V10ZM5 5H6.25V6.25H5V5Z"
                          fill="black"
                        />
                      </svg>
                      <h4>Промежуточный экзамен</h4>
                    </div>
                    <h5>+ Математика</h5>
                    <h6>17 ноября 2023</h6>
                  </div>
                  <div className="math-m">
                    <div className="math-t">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M12.4394 5.36625C12.4097 5.29842 12.3683 5.23641 12.3169 5.18313L8.56687 1.43312C8.51359 1.38174 8.45158 1.34026 8.38375 1.31062C8.365 1.30187 8.345 1.29687 8.325 1.29C8.2727 1.2722 8.21826 1.26148 8.16313 1.25813C8.15 1.25688 8.13812 1.25 8.125 1.25H3.75C3.06062 1.25 2.5 1.81062 2.5 2.5V12.5C2.5 13.1894 3.06062 13.75 3.75 13.75H11.25C11.9394 13.75 12.5 13.1894 12.5 12.5V5.625C12.5 5.61188 12.4931 5.6 12.4919 5.58625C12.4888 5.53107 12.4781 5.47659 12.46 5.42438C12.4538 5.40438 12.4481 5.385 12.4394 5.36625ZM10.3663 5H8.75V3.38375L10.3663 5ZM3.75 12.5V2.5H7.5V5.625C7.5 5.79076 7.56585 5.94973 7.68306 6.06694C7.80027 6.18415 7.95924 6.25 8.125 6.25H11.25L11.2513 12.5H3.75Z"
                          fill="black"
                        />
                        <path
                          d="M5 7.5H10V8.75H5V7.5ZM5 10H10V11.25H5V10ZM5 5H6.25V6.25H5V5Z"
                          fill="black"
                        />
                      </svg>
                      <h4>Промежуточный экзамен</h4>
                    </div>
                    <h5>+ Математика</h5>
                    <h6>17 ноября 2023</h6>
                  </div>
                </div>
                <div className="math-mat">
                  <div className="math-m">
                    <div className="math-t">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M12.4394 5.36625C12.4097 5.29842 12.3683 5.23641 12.3169 5.18313L8.56687 1.43312C8.51359 1.38174 8.45158 1.34026 8.38375 1.31062C8.365 1.30187 8.345 1.29687 8.325 1.29C8.2727 1.2722 8.21826 1.26148 8.16313 1.25813C8.15 1.25688 8.13812 1.25 8.125 1.25H3.75C3.06062 1.25 2.5 1.81062 2.5 2.5V12.5C2.5 13.1894 3.06062 13.75 3.75 13.75H11.25C11.9394 13.75 12.5 13.1894 12.5 12.5V5.625C12.5 5.61188 12.4931 5.6 12.4919 5.58625C12.4888 5.53107 12.4781 5.47659 12.46 5.42438C12.4538 5.40438 12.4481 5.385 12.4394 5.36625ZM10.3663 5H8.75V3.38375L10.3663 5ZM3.75 12.5V2.5H7.5V5.625C7.5 5.79076 7.56585 5.94973 7.68306 6.06694C7.80027 6.18415 7.95924 6.25 8.125 6.25H11.25L11.2513 12.5H3.75Z"
                          fill="black"
                        />
                        <path
                          d="M5 7.5H10V8.75H5V7.5ZM5 10H10V11.25H5V10ZM5 5H6.25V6.25H5V5Z"
                          fill="black"
                        />
                      </svg>
                      <h4>Промежуточный экзамен</h4>
                    </div>
                    <h5>+ Математика</h5>
                    <h6>17 ноября 2023</h6>
                  </div>
                  <div className="math-m">
                    <div className="math-t">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M12.4394 5.36625C12.4097 5.29842 12.3683 5.23641 12.3169 5.18313L8.56687 1.43312C8.51359 1.38174 8.45158 1.34026 8.38375 1.31062C8.365 1.30187 8.345 1.29687 8.325 1.29C8.2727 1.2722 8.21826 1.26148 8.16313 1.25813C8.15 1.25688 8.13812 1.25 8.125 1.25H3.75C3.06062 1.25 2.5 1.81062 2.5 2.5V12.5C2.5 13.1894 3.06062 13.75 3.75 13.75H11.25C11.9394 13.75 12.5 13.1894 12.5 12.5V5.625C12.5 5.61188 12.4931 5.6 12.4919 5.58625C12.4888 5.53107 12.4781 5.47659 12.46 5.42438C12.4538 5.40438 12.4481 5.385 12.4394 5.36625ZM10.3663 5H8.75V3.38375L10.3663 5ZM3.75 12.5V2.5H7.5V5.625C7.5 5.79076 7.56585 5.94973 7.68306 6.06694C7.80027 6.18415 7.95924 6.25 8.125 6.25H11.25L11.2513 12.5H3.75Z"
                          fill="black"
                        />
                        <path
                          d="M5 7.5H10V8.75H5V7.5ZM5 10H10V11.25H5V10ZM5 5H6.25V6.25H5V5Z"
                          fill="black"
                        />
                      </svg>
                      <h4>Промежуточный экзамен</h4>
                    </div>
                    <h5>+ Математика</h5>
                    <h6>17 ноября 2023</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="math-plus">
              <h1> + Категории (текст непонятен)</h1>
            </div>

            <div className="math-phone">
              <div className="math-m">
                <div className="math-t">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <path
                      d="M12.4394 5.36625C12.4097 5.29842 12.3683 5.23641 12.3169 5.18313L8.56687 1.43312C8.51359 1.38174 8.45158 1.34026 8.38375 1.31062C8.365 1.30187 8.345 1.29687 8.325 1.29C8.2727 1.2722 8.21826 1.26148 8.16313 1.25813C8.15 1.25688 8.13812 1.25 8.125 1.25H3.75C3.06062 1.25 2.5 1.81062 2.5 2.5V12.5C2.5 13.1894 3.06062 13.75 3.75 13.75H11.25C11.9394 13.75 12.5 13.1894 12.5 12.5V5.625C12.5 5.61188 12.4931 5.6 12.4919 5.58625C12.4888 5.53107 12.4781 5.47659 12.46 5.42438C12.4538 5.40438 12.4481 5.385 12.4394 5.36625ZM10.3663 5H8.75V3.38375L10.3663 5ZM3.75 12.5V2.5H7.5V5.625C7.5 5.79076 7.56585 5.94973 7.68306 6.06694C7.80027 6.18415 7.95924 6.25 8.125 6.25H11.25L11.2513 12.5H3.75Z"
                      fill="black"
                    />
                    <path
                      d="M5 7.5H10V8.75H5V7.5ZM5 10H10V11.25H5V10ZM5 5H6.25V6.25H5V5Z"
                      fill="black"
                    />
                  </svg>
                  <h4>Промежуточный экзамен</h4>
                </div>
                <h5>+ Математика</h5>
                <h6>17 ноября 2023</h6>
              </div>
              <div className="math-kv"></div>
              <div className="math-kv2"></div>
            </div>

            <div className="math-bom">
              <div className="math-cul">
                <h3>Клубы</h3>
                <hr className="pn" />
                <div className="math-sreda">
                  <h5>Понедельник 10:00</h5>
                  <div className="math-mal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.928 11.607C21.726 11.119 21.293 11.002 21 10.974V8C21 6.897 20.103 6 19 6H13V4.61C13.305 4.336 13.5 3.942 13.5 3.5C13.5 3.10218 13.342 2.72064 13.0607 2.43934C12.7793 2.15804 12.3978 2 12 2C11.6022 2 11.2206 2.15804 10.9393 2.43934C10.658 2.72064 10.5 3.10218 10.5 3.5C10.5 3.942 10.695 4.336 11 4.61V6H4.99999C3.89699 6 2.99999 6.897 2.99999 8V10.997L2.91799 11.003C2.66596 11.0212 2.43017 11.1341 2.25801 11.3191C2.08585 11.504 1.99009 11.7473 1.98999 12V14C1.98999 14.2652 2.09535 14.5196 2.28288 14.7071C2.47042 14.8946 2.72477 15 2.98999 15H2.99999V20C2.99999 21.103 3.89699 22 4.99999 22H19C20.103 22 21 21.103 21 20V15C21.2652 15 21.5196 14.8946 21.7071 14.7071C21.8946 14.5196 22 14.2652 22 14V12.062C22.0115 11.9068 21.9869 11.7511 21.928 11.607ZM4.99999 20V8H19L19.001 11.996L19 12V14L19.001 14.005L19.002 20H4.99999Z"
                        fill="#57B9FC"
                      />
                      <path
                        d="M8.5 14C9.32843 14 10 13.1046 10 12C10 10.8954 9.32843 10 8.5 10C7.67157 10 7 10.8954 7 12C7 13.1046 7.67157 14 8.5 14Z"
                        fill="#57B9FC"
                      />
                      <path
                        d="M15.5 14C16.3284 14 17 13.1046 17 12C17 10.8954 16.3284 10 15.5 10C14.6716 10 14 10.8954 14 12C14 13.1046 14.6716 14 15.5 14Z"
                        fill="#57B9FC"
                      />
                      <path d="M8 16H16V18H8V16Z" fill="#57B9FC" />
                    </svg>
                    <h5>Робототехника</h5>
                  </div>
                </div>
                <div className="math-sreda">
                  <h5>Среда 17:00</h5>
                  <div className="math-mal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.684 5.82095L10.684 2.54895C10.3819 2.43851 10.0576 2.40264 9.73869 2.44439C9.41977 2.48613 9.11563 2.60426 8.85214 2.78872C8.58864 2.97319 8.37358 3.21854 8.22522 3.50393C8.07687 3.78932 7.9996 4.1063 8 4.42795V10.5569C7.39487 10.1964 6.70439 10.0041 6 9.99995C3.794 9.99995 2 11.7939 2 13.9999C2 16.2059 3.794 17.9999 6 17.9999C8.206 17.9999 10 16.2059 10 13.9999V4.42795L19 7.69995V14.5559C18.3946 14.1962 17.7042 14.0042 17 13.9999C14.794 13.9999 13 15.7939 13 17.9999C13 20.2059 14.794 22 17 22C19.206 22 21 20.2059 21 17.9999V7.69995C21 6.86195 20.471 6.10595 19.684 5.82095ZM6 15.9999C4.897 15.9999 4 15.1029 4 13.9999C4 12.8969 4.897 11.9999 6 11.9999C7.103 11.9999 8 12.8969 8 13.9999C8 15.1029 7.103 15.9999 6 15.9999ZM17 20C15.897 20 15 19.1029 15 17.9999C15 16.8969 15.897 15.9999 17 15.9999C18.103 15.9999 19 16.8969 19 17.9999C19 19.1029 18.103 20 17 20Z"
                        fill="#57B9FC"
                      />
                    </svg>
                    <h5>Музыкалный кружок</h5>
                  </div>
                </div>
                <div className="math-sreda">
                  <h5>Понедельник 10:00</h5>
                  <div className="math-mal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H13L21 13V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM12 19V12H19L12 19Z"
                        fill="#FAEA97"
                      />
                    </svg>
                    <h5>Дебаты</h5>
                  </div>
                </div>
              </div>
              <div className="math-cul">
                <h3>Личные проекты</h3>
                <hr className="pn" />
                <div className="math-sreda">
                  <h5>Письменность</h5>
                  <div className="math-mal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3Z"
                        fill="#E9E8E8"
                      />
                      <path
                        d="M21 19V10C21 9.46957 20.7893 8.96086 20.4142 8.58579C20.0391 8.21071 19.5304 8 19 8H18V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H8V19C8 19.5304 8.21071 20.0391 8.58579 20.4142C8.96086 20.7893 9.46957 21 10 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19Z"
                        fill="#E9E8E8"
                      />
                    </svg>
                    <h5>Мой блог</h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H13L21 13V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM12 19V12H19L12 19Z"
                        fill="#FAEA97"
                      />
                    </svg>
                    <h5>Объемные сессии</h5>
                  </div>
                </div>
                <div className="math-sreda">
                  <h5>Программирование</h5>
                  <div className="math-mal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4.19189 3.14294H19.8069L18.3869 19.1769L11.9829 20.9889L5.61389 19.1759L4.19189 3.14294ZM16.8999 6.42394L7.09989 6.42194L7.25789 8.37094L14.7869 8.37294L14.5979 10.3929H9.65989L9.83889 12.3059H14.4359L14.1639 14.9259L11.9999 15.5239L9.8029 14.9209L9.66189 13.3519H7.72189L7.93789 16.2189L11.9999 17.4839L15.9949 16.3469L16.8999 6.42394Z"
                        fill="black"
                      />
                    </svg>
                    <h5>Верстка</h5>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 6H17V4C17 2.897 16.103 2 15 2H9C7.897 2 7 2.897 7 4V6H4C2.897 6 2 6.897 2 8V11H22V8C22 6.897 21.103 6 20 6ZM9 4H15V6H9V4ZM14 14H10V12H2V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V12H14V14Z"
                        fill="#5FBC5F"
                      />
                    </svg>
                    <h5>Приложение для этикеток</h5>
                  </div>
                </div>
                <div className="math-sreda">
                  <h5>Видео</h5>
                  <div className="math-mal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 11C18 10.041 17.32 9.239 16.419 9.046C16.779 8.445 17 7.75 17 7C17 4.794 15.206 3 13 3C11.484 3 10.178 3.857 9.5 5.104C8.822 3.857 7.516 3 6 3C3.794 3 2 4.794 2 7C2 7.902 2.312 8.726 2.817 9.396C2.56453 9.58052 2.35902 9.82186 2.21709 10.1005C2.07516 10.3792 2.00079 10.6873 2 11V19C2 20.103 2.897 21 4 21H16C17.103 21 18 20.103 18 19V16.363L22 18.363V11.363L18 13.363V11ZM13 5C14.103 5 15 5.897 15 7C15 8.103 14.103 9 13 9C11.897 9 11 8.103 11 7C11 5.897 11.897 5 13 5ZM6 5C7.103 5 8 5.897 8 7C8 8.103 7.103 9 6 9C4.897 9 4 8.103 4 7C4 5.897 4.897 5 6 5Z"
                        fill="#6BB9BE"
                      />
                    </svg>
                    <h5>Влоги</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="math-ob">
              <Link to="/">
              <button>Обратно</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curs;
