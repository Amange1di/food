import React from "react";
import Logo from "./../assets/Logo (1).png";
import Img from "./../assets/footer.png"
import { NavLink } from "react-router-dom";

import { RxTwitterLogo } from "react-icons/rx";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const menu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Menu",
    link: "/menu",
  },
  {
    title: "Pages",
    link: "/pages",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="group">
            <div className="logo">
              <img src={Logo} alt="" />
              <p>
                In the new era of technology we look a in the future with
                certainty and pride to for our company and.
              </p>
              <div className="icons">
                <div>
                  <RxTwitterLogo />
                </div>
                <div>
                  <LuFacebook />
                </div>
                <div>
                  <FaInstagram />
                </div>
                <div>
                  <FaGithub />
                </div>
              </div>
            </div>
            <div className="nav">
            <div className="menu">
              <h3>Pages</h3>
              {menu.map(({ link, title }) => (
                <NavLink to={link}>{title}</NavLink>
              ))}
              <a href="">Delivery</a>
             
              <a href="">Blog</a>
            </div>
            <div className="menu">
              <h3>Utility Pages</h3>
             <h5> Start Here  </h5>
             <h5> Styleguide  </h5>
             <h5> Password Protected  </h5>
             <h5> 404 Not Found  </h5>
             <h5> Licenses </h5>
             <h5> Changelog </h5>
             <h5>  View More </h5>
            </div>
            
            </div>
            <div className="instagram">
                <h3>Follow Us On Instagram</h3>
                <img src={Img} alt="" />
            </div>
          </div>
          <hr />
          <p className="end">Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
