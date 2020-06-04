import { Link } from "react-router-dom";
import styled from "styled-components";

const NavTag = styled.nav`
  width: 100%;
  max-width: 1920px;
  margin: auto;
  padding: 0.875rem;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;

  a {
    color: ${(p) => p.theme.color.dark};
  }

  @media (min-width: ${(p) => p.theme.bp.tablets}) {
    padding: 3rem;
    font-size: 1.125rem;
  }
`;

const Logo = styled(Link)`
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

  @media (min-width: ${(p) => p.theme.bp.tablets}) {
    font-size: 1.125rem;

    span {
      font-size: 1.35rem;
    }
  }
`;

export { NavTag, Logo };
