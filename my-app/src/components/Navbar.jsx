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

  return (
    <div className="navbar-container">
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
      <ul className={`desktop ${navbarOpened ? "show" : "hide"}`}>
        <li
          onClick={() => {
            setNavbarOpened(!navbarOpened);
          }}
        >
          <a href="#home" className="wrapper">
            <AiOutlineHome className="icon" />
            <div className="name">Home</div>
          </a>
        </li>
        <li
          onClick={() => {
            setNavbarOpened(!navbarOpened);
          }}
        >
          <a href="#about" className="wrapper">
            <AiOutlineUser className="icon" />
            <div className="name">About</div>
          </a>
        </li>
        <li
          onClick={() => {
            setNavbarOpened(!navbarOpened);
          }}
        >
          <a href="#resume" className="wrapper">
            <AiOutlineFileText className="icon" />
            <div className="name">Resume</div>
          </a>
        </li>
        <li
          onClick={() => {
            setNavbarOpened(!navbarOpened);
          }}
        >
          <a href="#projects" className="wrapper">
            <FiServer className="icon" />
            <div className="name">Projects</div>
          </a>
        </li>
        <li
          onClick={() => {
            setNavbarOpened(!navbarOpened);
          }}
        >
          <a href="#contact" className="wrapper">
            <AiOutlineMail className="icon" />
            <div className="name">Contact</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
