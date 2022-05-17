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
  );
};

export default Navbar;
