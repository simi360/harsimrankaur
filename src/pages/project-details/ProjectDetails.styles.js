import styled from "styled-components";
import Title from "../../components/text/Title";
import ImgBg from "../../components/img/img-with-bg/ImgWithBg";
import ArrowLink from "../../components/links/arrow-link/ArrowLink";
import ProjectNav from "../../components/nav/project-nav/ProjectNav";
import { FadeUp } from "../../utils/animations";

const Main = styled.main`
  width: 100%;
  max-width: ${(p) => `${p.theme.container}px`};
  margin: auto;

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    padding: 0 0 2rem;
  }
  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    padding: 0;
    display: flex;
  }
`;

const ProjectTitle = styled(Title)`
  margin: 5rem 0 0.5rem;
  line-height: 0.8;
  font-size: 3.2rem;

  &::after {
    transform: translateX(-100%);
    transition: ${(p) => `transform 0.6s ${p.theme.animations.easeInOut};`};
  }

  .title-span {
    padding: 0.5rem 0.25rem;
    opacity: 0;
    transition: ${(p) => `opacity 0.1s ${p.theme.animations.easeInOut};`};
    transition-delay: 0.12s;
  }

  .project-enter-done & {
    &::after {
      transform: translateX(100%);
      transition: ${(p) => `transform 1s ${p.theme.animations.easeInOut};`};
    }

    .title-span {
      opacity: 1;
      transition: ${(p) => `opacity 0.1s ${p.theme.animations.easeInOut};`};
      transition-delay: 0.45s;
    }
  }

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    font-size: 8rem;
    margin-top: 10rem;

    .title-span {
      padding: 1.25rem 0.5rem 0.5rem;
    }
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: portrait) {
    font-size: ${(p) => (p.title.length >= 4 ? "8vw" : "11.5")};

    .title-span {
      padding: 1rem 0.5rem 0.5rem;
    }
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    margin-top: 0;
    font-size: ${(p) => (p.title.length >= 4 ? "4.5rem" : "8rem")};

    .title-span {
      padding: 1rem 0.5rem 0.5rem;
    }
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.largeDesktops}px`}) and (orientation: landscape) {
    font-size: ${(p) => (p.title.length >= 4 ? "4.75rem" : "11.5rem")};
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

const AgencyLink = styled.a`
  color: ${(p) => p.theme.color.primary};
  font-size: 1.2rem;
  line-height: 1;
`;

const CLientLink = styled(ArrowLink)`
  margin-top: 1.5rem;
  display: block;

  /*animation*/
  ${FadeUp}
`;

const Img = styled(ImgBg)`
  width: 100%;
  padding: 0;

  /*animation*/
  ${FadeUp}
`;

const LeftSection = styled.section`
  padding: 0 1rem;

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    min-height: 100vh;
    padding: 5rem 1rem 3rem 2rem;
    margin: 0 8.3333%;
    flex-basis: 33.333%;
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.largeDesktops}px`}) and (orientation: landscape) {
    padding: 5rem 1rem 3rem;
    margin: 0 16.666%;
    flex-basis: 33.333%;
  }
`;

const RightSection = styled.section`
  margin-top: 2.65rem;
  padding: 0 1rem 1.5rem;
  overflow: hidden;

      /*animation*/
      ${FadeUp}

  @media (min-width: ${(p) =>
    `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    margin-top: 0;
    position: fixed;
    width: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
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
    /*animation*/
    ${FadeUp}

  @media (min-width: ${(p) =>
    `${p.theme.bp.tablets}px`}) and (orientation: portrait) {
    display: flex;
  }
`;

const FlexChilds = styled.div`
  padding-right: 1rem;
  flex-basis: 50%;
`;

const ProjectNavigation = styled(ProjectNav)`
  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    width: calc(100% / 12);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
  }
  @media (min-width: ${(p) =>
      `${p.theme.container}px`}) and (orientation: landscape) {
    width: ${(p) => `calc(${p.theme.container}px / 12)`};
    left: ${(p) => `calc(50vw - ${p.theme.container}px / 2)`};
  }
`;

export {
  Main,
  ProjectTitle,
  CatTitle,
  CatDescription,
  ListItem,
  CLientLink,
  AgencyLink,
  Img,
  LeftSection,
  RightSection,
  FlexContainer,
  FlexChilds,
  ProjectNavigation,
};
