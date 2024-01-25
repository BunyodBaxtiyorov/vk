import React from "react";
import "./main.css";
import logo from "./img/logo.png";
import img from "./img/img.png";
import img1 from "./img/img1.png";
import frame from "./img/frame.png";
export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="head-project">
          <header className="head">
            <ul className="ul-head">
              <img src={logo} alt="" width={"66px"} height={"51px"} />
              <nav className="nav-head">
                <li>
                  {" "}
                  <a href="#">Home</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Property</a>
                </li>
                <li>
                  {" "}
                  <a href="#">Property</a>
                </li>
              </nav>
              <button className="btn-head">Sign Up</button>
            </ul>
          </header>
          <div className="head-title">
            <div className="head-all-title">
              <h1>Good Living Better live your dreams easily here</h1>
              <p>
                Everything you need about finding your place to live will be
                here, where it will be easier for you. Our furniture is made
                from selected and best quality materials that are suitable for
                your dream home
              </p>
              <div className="search">
                <div className="search-head">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 1C14.3869 1 16.6761 1.99337 18.364 3.76159C20.0518 5.5298 21 7.92801 21 10.4286C21 14.934 18.0975 19.081 12.402 22.8776C12.2818 22.9575 12.1424 23 12 23C11.8576 23 11.7182 22.9575 11.598 22.8776C5.9025 19.081 3 14.934 3 10.4286C3 7.92801 3.94821 5.5298 5.63604 3.76159C7.32387 1.99337 9.61305 1 12 1ZM12 7.28576C11.2044 7.28576 10.4413 7.61689 9.87868 8.20629C9.31607 8.7957 9 9.5951 9 10.4286C9 11.2622 9.31607 12.0616 9.87868 12.651C10.4413 13.2404 11.2044 13.5715 12 13.5715C12.7956 13.5715 13.5587 13.2404 14.1213 12.651C14.6839 12.0616 15 11.2622 15 10.4286C15 9.5951 14.6839 8.7957 14.1213 8.20629C13.5587 7.61689 12.7956 7.28576 12 7.28576Z"
                      fill="#F2994A"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for the location you want!"
                  />
                  <button>search ﹥</button>
                </div>
                <div className="our-partnerships">
                  <h3>Our Partnership </h3>
                  <img src={frame} alt="" />
                </div>
              </div>
            </div>
            <div className="img-back">
              <img src={img} alt="" width={"756px"} height={"756px"} />
              <img
                src={img1}
                alt=""
                width={"341px"}
                height={"752px"}
                className="img-header"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
