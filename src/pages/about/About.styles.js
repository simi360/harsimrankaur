import styled from "styled-components";
import Title from "../../components/text/Title";
import ImgBg from "../../components/img/img-with-bg/ImgWithBg";
import { FadeUp } from "../../utils/animations";

const Main = styled.main`
  width: 100vw;
  margin: auto;
  padding: 0 1rem;
  max-width: ${(p) => `${p.theme.container}px`};
  color: ${(p) => p.theme.color.grey};

  strong {
    font-family: ${(p) => `${p.theme.font.poppins}px`};
    font-weight: 500;
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.largeDesktops}px`}) and (orientation: landscape) {
    padding: 4rem 1rem;
    display: flex;

    section {
      &:first-of-type {
        width: 33.333%;
      }
      &:nth-child(2) {
        width: 41.666%;
      }
      &:last-of-type {
        width: 25%;
      }
      &:not(:first-of-type) {
        padding-left: 1rem;
      }
      &:not(:last-of-type) {
        padding-right: 1rem;
      }
    }
  }

  @media (min-width: ${(p) =>
      `${p.theme.container}px`}) and (orientation: landscape) {
    section {
      padding: 4rem 0;
      &:first-of-type {
        margin-left: calc(100% / 12);
        width: 33.333%;
      }
      &:not(:first-of-type) {
        padding-left: 1rem;
        width: 25%;
      }
      &:not(:last-of-type) {
        padding-right: 1rem;
      }
    }
  }
`;

const IntroContainer = styled.section`
  /*Animations*/
  ${FadeUp}
`;

const AboutTitle = styled(Title)`
  margin-top: 5rem;

  .title-span {
    padding: 0.5rem;
  }

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    font-size: 7.875rem;
  }
`;

const Intro = styled.p`
  max-width: 45ch;
  margin: 2.5rem 0 2rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${(p) => p.theme.color.grey};
`;

const Link = styled.p`
  margin-top: 2rem;
  a {
    color: ${(p) => p.theme.color.primary};
    line-height: 1;
  }
`;

const Img = styled(ImgBg)`
  margin-top: 2rem;
  display: none;

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    display: block;
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.largeDesktops}px`}) and (orientation: landscape) {
    margin-bottom: 4rem;
  }
`;

const H3 = styled.h3`
  margin: 2rem 0 1rem;
  font-size: 1.25rem;
  font-family: ${(p) => `${p.theme.font.poppins}px`};
  font-weight: 400;
`;

const P = styled.p`
  max-width: 65ch;
  margin-bottom: 1rem;
`;

const FlexSkills = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const SkillP = styled.p`
  flex-basis: 33.333%;
`;

const SquareContainer = styled.div`
  padding: 0 0 0 1rem;
  flex-basis: 66.6666%;

  div {
    width: 0.875rem;
    height: 0.875rem;
    margin: 0.15rem 0.75rem 0.15rem 0;
    display: inline-block;
    background: #fff;
    border: ${(p) => `1px solid ${p.theme.color.primary}`};
    box-shadow: ${(p) => `3px 3px 0 ${p.theme.color.primary}`};

    &.active {
      background: ${(p) => p.theme.color.primaryLight};
    }
  }
`;

const ListItems = styled.li`
  margin-bottom: 0.25rem;
`;

const FlexContainer = styled.div`
  position: relative;

  &::after {
    content: "";
    width: 3px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 5.65rem;
    display: block;
    background: ${(p) => p.theme.color.primary};
  }

  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    &::after {
      width: 5px;
      left: 6.625rem;
    }
  }
`;

const FlexElem = styled.div`
  margin-bottom: 1rem;
  display: flex;

  p {
    &:first-of-type {
      padding-right: 1rem;
      color: ${(p) => p.theme.color.primary};
    }

    &:last-of-type {
      padding-left: 1rem;
      flex-basis: 66.666%;
    }
  }

  span {
    font-family: ${(p) => `${p.theme.font.poppins}px`};
    font-weight: 500;
    line-height: 1;
    color: ${(p) => p.theme.color.primary};
  }

  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    &:last-of-type {
      margin-bottom: 0;
    }

    p {
      &:first-of-type {
        padding-right: 2rem;
      }

      &:last-of-type {
        padding-left: 2rem;
      }
    }
  }
`;

const FlexSKillsContainer = styled.section`
  /*Animations*/
  ${FadeUp}
  animation-delay: 0.25s;

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    display: flex;

    > div {
      &:first-of-type {
        flex-basis: 60%;
      }

      &:last-of-type {
        padding: 4rem 2rem 0;
        flex-basis: 40%;
      }
    }
  }
  @media (min-width: ${(p) =>
      `${p.theme.bp.largeDesktops}px`}) and (orientation: landscape) {
    display: block;
    align-self: flex-end;

    > div {
      &:last-of-type {
        padding: 1rem 0 0;
      }
    }
  }
`;

const FlexExpContainer = styled.section`
  margin-bottom: 3rem;

  /*Animations*/
  ${FadeUp}
  animation-delay: 0.5s;

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    display: flex;

    > div {
      flex-basis: 50%;
    }
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    > div {
      flex-basis: 33.333%;

      &:first-of-type {
        flex-basis: calc(33.333% - 5rem);
        margin-right: 5rem;
      }
    }
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.largeDesktops}px`}) and (orientation: landscape) {
    margin-bottom: 0rem;
    display: block;
    align-self: flex-end;
  }
`;

export {
  Main,
  AboutTitle,
  Img,
  Intro,
  P,
  Link,
  H3,
  FlexSkills,
  SkillP,
  SquareContainer,
  ListItems,
  FlexElem,
  FlexContainer,
  FlexSKillsContainer,
  FlexExpContainer,
  IntroContainer,
};
