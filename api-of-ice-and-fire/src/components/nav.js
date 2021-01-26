import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./About";
import Houses from "./houses";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <Link to="/">Home</Link>
        <Link to="/houses">Houses</Link>
      </div>

      <Route exact path="/">
        <About />
      </Route>
      <Route path="/houses">
        <Houses />
      </Route>
    </>
  );
};

export default Navbar;
