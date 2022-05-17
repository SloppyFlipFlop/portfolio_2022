import React from "react";
import "./../styles/components/Navbar.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineMail,
} from "react-icons/ai";

import { FiServer } from "react-icons/fi";

const Navbar = () => {
  return (
    <ul>
      <li>
        <a href="/">
          <div className="name">Home</div>
          <AiOutlineHome className="icon" />
        </a>
      </li>
      <li>
        <a href="#about">
          <div className="name">About</div>
          <AiOutlineUser className="icon" />
        </a>
      </li>
      <li>
        <a href="#resume">
          <div className="name">Resume</div>
          <AiOutlineFileText className="icon" />
        </a>
      </li>
      <li>
        <a href="#projects">
          <div className="name">Projects</div>
          <FiServer className="icon" />
        </a>
      </li>
      <li>
        <a href="#contact">
          <div className="name">Contact</div>
          <AiOutlineMail className="icon" />
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
