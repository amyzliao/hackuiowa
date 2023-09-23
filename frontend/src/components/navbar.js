import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">whentoschmeet</a>
      </div>

      <div className="navbar-end">
        <a className="btn">Register/Login</a>
      </div>
    </div>
  );
};

export default NavBar;
