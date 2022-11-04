import React from "react";
import { NavTag, Logo, NavItems } from './nav.styles';
import {useLocation} from 'react-router-dom';

function Nav() {
  const location = useLocation();
  return (
    <NavTag>
      <Logo
        to={{
          pathname: "/",
          state: { prevHash: location.hash },
        }}
        aria-label="home"
      >
        Harsimran<span>Kaur</span>
      </Logo>
      <NavItems to="">Home</NavItems>
      <NavItems to="/about">About</NavItems>
    </NavTag>
  );
}

export default Nav;
