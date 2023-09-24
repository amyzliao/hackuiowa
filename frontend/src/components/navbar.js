"use client";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start pl-10">
        <a className="normal-case text-xl mx-50px">whentoschmeet</a>
      </div>

      <div className="navbar-end pr-10">
      
        <a className="btn mx-50px bg-accent hover:bg-accent-focus">Register/Login</a>
        
      </div>
    </div>
  );
};

export default NavBar;
