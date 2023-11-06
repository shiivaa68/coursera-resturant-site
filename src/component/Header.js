import React from "react";
import {Link}  from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        {/* baner text */}
        <div className="banner">
          <h2>little lemon</h2>
          <h3>chicago</h3>
          <p>
            we are a family owned persioan resturant, focus on traditional
            recipe served with a modern twist
          </p>
        
          <Link to="/booking">
            <button aria-label="On Click">Reserve table</button>
          </Link>
        </div>
        {/* banner image  */}
        <div className="banner-img">
          <img src={bannerImg} alt="banner" />
        </div>
      </section>
    </header>
  );
};
export default Header;
