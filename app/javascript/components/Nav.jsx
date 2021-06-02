import React from "react";
import { Link } from "react-router-dom";
import waldo from "../../assets/images/waldo.png";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={waldo} alt="waldo" />
      </Link>
      <p>Where's Waldo</p>
    </nav>
  );
};

export default Nav;
