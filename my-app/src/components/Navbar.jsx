import React, { useState } from "react";
import "./../styles/components/Navbar.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineClose,
} from "react-icons/ai";

import { FiServer } from "react-icons/fi";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navbarOpened, setNavbarOpened] = useState(false);

  // need to make it so that if the user is on desktop, the navbar is automatically opened

  return (
    <>
      <div className="menu_icons">
        {navbarOpened ? (
          <AiOutlineClose
            className="close"
            onClick={() => setNavbarOpened(!navbarOpened)}
          />
        ) : (
          <GiHamburgerMenu
            className="hamburger"
            onClick={() => setNavbarOpened(!navbarOpened)}
          />
        )}
      </div>
      {navbarOpened ? (
        <ul>
          <li>
            <a href="/" className="wrapper">
              <AiOutlineHome className="icon" />
              <div className="name">Home</div>
            </a>
          </li>
          <li>
            <a href="#about" className="wrapper">
              <AiOutlineUser className="icon" />
              <div className="name">About</div>
            </a>
          </li>
          <li>
            <a href="#resume" className="wrapper">
              <AiOutlineFileText className="icon" />
              <div className="name">Resume</div>
            </a>
          </li>
          <li>
            <a href="#projects" className="wrapper">
              <FiServer className="icon" />
              <div className="name">Projects</div>
            </a>
          </li>
          <li>
            <a href="#contact" className="wrapper">
              <AiOutlineMail className="icon" />
              <div className="name">Contact</div>
            </a>
          </li>
        </ul>
      ) : null}
    </>
  );
};

export default Navbar;
