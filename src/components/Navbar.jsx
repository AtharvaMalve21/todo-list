import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <h1>Todo-list</h1>
        <div className="links">
          <NavLink className="not-active" to="/">
            {" "}
            Home{" "}
          </NavLink>
          <NavLink className="not-active" to="/create">
            Create Todo
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
