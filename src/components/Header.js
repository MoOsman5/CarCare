import React from "react";
import "../style/Header.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="home">
      <Nav />
      <div className="home-content">
        <h1 className="title">We are professional and special</h1>
        <p className="home-des" >
          We are a maintenance center specialized in the sale and maintenance of
          all car controls and car keys
        </p>
        <button className="btn btn-start hover-opacity">Get Started !</button>
        <button className="btn btn-learn hover-opacity">Learn More !</button>

      </div>
    </div>
  );
};

export default Header;
