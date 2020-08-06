import { Link } from "react-router-dom";
import styled from "styled-components";

const NavTag = styled.nav`
  width: 100vw;
  max-width: ${(p) => `${p.theme.container}px`};
  margin: auto;
  padding: 0.875rem;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 500;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.8);
  z-index: 9999;

  a {
    color: ${(p) => p.theme.color.dark};
  }

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    padding: 1rem;
    font-size: 1.125rem;
  }
`;

const Logo = styled(Link)`
  margin-right: auto;
  font-family: ${(p) => p.theme.font.poppins};
  text-transform: uppercase;
  color: ${(p) => p.theme.color.secondary};
  line-height: 0.9;
  font-weight: bold;

  span {
    display: block;
    font-size: 1.175rem;
    letter-spacing: 3px;
  }

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    font-size: 1.125rem;

    span {
      font-size: 1.35rem;
    }
  }
`;

const NavItems = styled(Link)`
  margin: 0 1rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

export { NavTag, Logo, NavItems };
