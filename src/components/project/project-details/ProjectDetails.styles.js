import styled from "styled-components";
import Title from "../../text/Title";
import ArrowLink from "../../icons/ArrowLink";
import ImgBg from "../../img/ImgWithBg";

const Main = styled.main`
  width: 100%;
  max-width: ${(p) => `${p.theme.container}px`};
  margin: auto;
  padding: 0 1rem 4rem;

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    padding: 0 0 5rem;
  }
  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    padding: 0;
    display: flex;
  }
`;

const ProjectTitle = styled(Title)`
  margin: 5rem 0 0.5rem;
  padding: 0.5rem 0.25rem;
  line-height: 0.8;

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    margin-top: 10rem;
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: portrait) {
    font-size: ${(p) =>
      p.title.length >= 4
        ? "clamp(2.4rem, 8vw, 5.5rem)"
        : "clamp(4rem, 15.5vw, 11.5rem); "};
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    margin-top: 7rem;
    font-size: ${(p) =>
      p.title.length >= 4
        ? "clamp(2.4rem, 8vw, 5.5rem)"
        : "clamp(4rem, 15.5vw, 8rem); "};
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.largeDesktops}px`}) and (orientation: landscape) {
    font-size: ${(p) =>
      p.title.length >= 4
        ? "clamp(2.4rem, 8vw, 4.75rem)"
        : "clamp(4rem, 15.5vw, 11.5rem); "};
  }
`;

const CatTitle = styled.h3`
  margin-top: 1.5rem;
  font-family: ${(p) => p.theme.font.poppins};
  font-size: 1.125rem;
  font-weight: 500;
`;

const CatDescription = styled.p`
  max-width: 40ch;
  font-size: 0.875rem;
`;

const ListItem = styled.li`
  max-width: 40ch;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

const Link = styled.a`
  margin-top: 1.5rem;
  display: inline-block;
  color: ${(p) => p.theme.color.primary};
`;

const Arrow = styled(ArrowLink)`
  width: 0.75rem;
  margin-left: 0.75rem;
  transform: translateX(0);
  transition: transform 0.25s ease-in-out;

  ${Link}:hover & {
    transform: translateX(50%);
  }
`;

const Img = styled(ImgBg)`
  width: 100%;
  padding: 0;
`;

const LeftSection = styled.section`
  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    padding: 0 1rem;
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    min-height: 100vh;
    padding: 0 1rem 3rem;
    flex-basis: 33.333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.largeDesktops}px`}) and (orientation: landscape) {
    margin: 0 16.666%;
    flex-basis: 33.333%;
  }
`;

const RightSection = styled.section`
  margin-top: 2.65rem;

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    margin-top: 0;
    position: fixed;
    width: calc(100% / 12 * 7);
    top: 0;
    right: 0;
    bottom: 0;
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.largeDesktops}px`}) and (orientation: landscape) {
    width: 50%;
  }

  @media (min-width: ${(p) =>
      `${p.theme.container}px`}) and (orientation: landscape) {
    margin-top: 0;
    width: ${(p) => `calc(${p.theme.container}px / 12 * 5)`};
    left: 50%;
    right: auto;
  }
`;

const FlexContainer = styled.div`
  @media (min-width: ${(p) =>
      `${p.theme.bp.tablets}px`}) and (orientation: portrait) {
    display: flex;
  }
`;

const FlexChilds = styled.div`
  padding-right: 1rem;
  flex-basis: 50%;
`;

export {
  Main,
  ProjectTitle,
  CatTitle,
  CatDescription,
  ListItem,
  Link,
  Arrow,
  Img,
  LeftSection,
  RightSection,
  FlexContainer,
  FlexChilds,
};
