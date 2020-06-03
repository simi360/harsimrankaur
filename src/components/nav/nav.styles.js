import { Link } from "react-router-dom";
import styled from "styled-components";

const NavTag = styled.nav`
  width: 100%;
  max-width: 1640px;
  margin: auto;
  padding: 0.8125rem;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;

  @media (min-width: 768px) {
    padding: 3rem;
    font-size: 1.3rem;
  }
`;

const Logo = styled(Link)`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  color: black;
  line-height: 0.9;

  span {
    font-size: 1.15rem;
    letter-spacing: 3px;
    display: block;
  }

  @media (min-width: 768px) {
    font-size: 1.45rem;

    span {
      font-size: 1.75rem;
    }
  }
`;

export { NavTag, Logo };
