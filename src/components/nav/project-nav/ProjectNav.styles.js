import styled from "styled-components";
import { Link } from "react-router-dom";
import { FadeLeft } from "../../../utils/animations";

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
  position: relative;
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

    & > span {
      display: block;
    }

    & > span,
    &::after,
    &:first-of-type::before {
      /*Animations*/
      ${FadeLeft}
    }

    &::after,
    &:first-of-type::before {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;

      display: block;
      background: ${(p) => p.theme.color.primary};
    }

    &::after {
      bottom: 0;
      left: 0;
    }

    &:first-of-type::before {
      top: 0;
      left: 0;
      transition-delay: 0s;
    }

    &:first-of-type {
      border-right: none;

      & > span {
        transition-delay: 0.1s;
      }
      &::after {
        transition-delay: 0.15s;
      }
    }

    &:last-of-type {
      & > span {
        transition-delay: 0.2s;
      }

      &::after {
        transition-delay: 0.25s;
      }
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
