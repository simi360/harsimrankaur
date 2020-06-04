import React from "react";
import { Link } from "react-router-dom";
import { NavTag, Logo } from "./nav.styles";

function Nav() {
  return (
    <NavTag>
      <Logo to="/" aria-label="home">
        Sarah <span>Hick</span>
      </Logo>
      <Link to="/about">About</Link>
    </NavTag>
  );
}

export default Nav;
