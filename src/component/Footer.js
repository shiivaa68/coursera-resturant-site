import React from "react";
import logo from "../images/Logo.svg";
const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <img src={logo} alt="" />
          <p>
            we are a family owend resturant ,foucused on traditional recipes
            served with a modern twist
          </p>
        </div>
        <div>
          <h3>important links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">reservasion</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>contact</h3>
          <ul>
            <li>address:<br/>123 towncity,usa</li>
            <li>phone:<br/>+46701432757</li>
            <li>email:<br/>little lemon@gamil.com</li>
          </ul>
        </div>
        <div>
          <h3>social media</h3>
          <ul>
            <li>
              <a href="/">facebook</a>
            </li>
            <li>
              <a href="/">instagram</a>
            </li>
            <li>
              <a href="/">x</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
