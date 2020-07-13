import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectsNavigation = styled.section`
  padding-top: 4.75rem;
  display: flex;
  font-family: ${(p) => p.theme.font.poppins};
  font-size: 1rem;
  font-weight: 400;

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    padding-top: 3rem;
  }
  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    padding-top: calc(50vh - 5.3rem);
    display: block;
  }
`;

const NavLink = styled(Link)`
  padding: 0 1rem 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(p) => p.theme.color.dark};

  &:first-of-type {
    border-right: 2px solid ${(p) => p.theme.color.primary};
  }

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    padding: 0 1rem;
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    padding: 1rem;
    display: block;
    border-bottom: 2px solid ${(p) => p.theme.color.primary};
    &:first-of-type {
      border-top: 2px solid ${(p) => p.theme.color.primary};
      border-right: none;
    }
  }
`;

const LegendSpan = styled.span`
  display: block;
  color: ${(p) => p.theme.color.primary};
  font-size: 0.75rem;
`;

const LinkText = styled.span`
  color: inherit;
`;

export { ProjectsNavigation, NavLink, LegendSpan, LinkText };
