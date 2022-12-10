import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li className="italic font-serif">
        <Link to="/">Home</Link>
      </li>
      <li className="italic font-serif">
        <a href="#my_project">My Projects</a>
      </li>
      <li className="italic font-serif">
        <a href="#contact_me">Contact Me</a>
      </li>
      <li className="italic font-serif">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/128wK5bTBBtAC0bUuJdwWv9v-FWfDMH8j/view?usp=sharing"
        >
          <button className="btn glass">View Resume</button>
        </a>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar flex mx-auto bg-black text-white lg:pl-52">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl italic font-serif"
        >
          Shahanaz Ahmed Nishi
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
