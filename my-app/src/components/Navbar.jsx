import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'

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
        <a href="/">
          <div className="name">About</div>
          <AiOutlineHome className="icon" />
        </a>
      </li>
      <li>Resume</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  )
}

export default Navbar