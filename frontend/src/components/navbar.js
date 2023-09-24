"use client";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start pl-10 ">
        <a className="text-xl font-bold">whentoschmeet</a>
      </div>

      <div className="navbar-end pr-10 py-2">
        <a className="btn mx-50px bg-primary hover:bg-primary-focus">
          Register/Login
        </a>
      </div>
    </div>
  );
};

export default NavBar;
