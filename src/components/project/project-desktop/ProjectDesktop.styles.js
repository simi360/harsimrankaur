import styled from "styled-components";
import ImgWithOverflowingBg from "../../img/img-with-overflowing-bg/ImgWithOverflowinBg";

const ProjectContainer = styled.div`
  width: 100%;
  max-width: ${(p) => `${p.theme.container}px`};
  min-height: 100vh; /*needed for IOS to set a height when using grid rows*/
  position: fixed;
  top: 0;
  left: 50vw;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-template-rows: repeat(10, minmax(0, 1fr));
  grid-gap: 1.875rem;
  font-family: ${(p) => p.theme.font.poppins};
  transform: translateX(-50%);
  z-index: 0;
  pointer-events: none;

  &.animate-enter-done {
    z-index: 100;
    pointer-events: all;
  }

  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

const ProjectImg = styled(ImgWithOverflowingBg)`
  width: min(70vh, 40rem, 90%);
  padding-top: min(70vh, 40rem, 100%);
  margin-top: 1vh;
  grid-column: 2 / span 4;
  grid-row: 3 / span 7;
  align-self: center;
  transform: translateX(-100vw);
  transform-origin: left;

  .animate-enter-done &,
  .animate-exit &,
  .change-route-exit & {
    transform: translateX(0);
    transition: ${(p) => `transform 0.5s ${p.theme.animations.easeOut};`};
    transition-delay: 0s;
  }
  .animate-exit-active &,
  .change-route-exit-active & {
    transform: translateX(-100vw);
    transition: ${(p) => `transform 0.4s ${p.theme.animations.easeIn};`};
    transition-delay: 0.3s;
  }

  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    grid-row: 2 / span 8;
    grid-column: 3 / span 5;
  }

  @media (orientation: portrait) and (min-width: ${(p) =>`${p.theme.bp.desktops}px`}) {
    grid-column: 2 / span 7;
  }
`;

const ProjectIndex = styled.p`
  grid-column: 4 / span 3;
  grid-row: 7;
  align-self: end;
  color: ${(p) => p.theme.color.primary};
  font-size: 2.25rem;
  line-height: 0.8;
  letter-spacing: 3px;
  transform: scaleX(0);
  transform-origin: left;
  overflow: hidden;
  z-index: -1;

  &::before {
    content: "";
    width: 68%;
    height: 0.25rem;
    margin-right: 1rem;
    position: relative;
    bottom: 0.25rem;
    display: inline-block;
    background: ${(p) => p.theme.color.primary};
    z-index: -1;
  }

  span {
    display: inline-block;
    transform: translateY(200%);
  }

  .animate-enter-done &,
  .animate-exit &,
  .change-route-exit & {
    transform: scaleX(1);
    transition: ${(p) => `transform 0.3s ${p.theme.animations.easeInOut};`};
    transition-delay: 0.3s;

    span {
      transform: translateY(0);
      transition: ${(p) => `transform 0.25s ${p.theme.animations.easeOut};`};
      transition-delay: 0.55s;
    }
  }

  .animate-exit-active &,
  .change-route-exit-active & {
    transform: scaleX(0);
    transition: ${(p) => `transform 0.3s ${p.theme.animations.easeIn};`};
    transition-delay: 0.15s;

    span {
      transform: translateY(200%);
      transition: transform 0.2s linear;
      transition-delay: 0s;
    }
  }

  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    grid-column: 7 / span 5;
  }
  @media (min-width: ${(p) => `${p.theme.bp.largeDesktops}px`}) {
    grid-column: 6 / span 5;
    &::before {
      width: 86%;
    }
  }
`;

const ProjectTitle = styled.div`
  grid-column: 4 / span 3;
  grid-row: 5 / span 2;
  position: relative;
  overflow: hidden;

  z-index: 1;

  h2 {
    font-size: ${(p) => (p.title.length >= 4 ? "8vw" : "15.5vw")};

    .title-span {
      opacity: 0;
    }
  }

  .animate-enter-done &,
  .animate-exit & {
    h2 {
      &::after {
        transform: translateX(100%);
        transition: ${(p) => `transform 1s ${p.theme.animations.easeInOut};`};
        transition-delay: 0.2s;
      }

      .title-span {
        opacity: 1;
        transition: ${(p) => `opacity 0.1s ${p.theme.animations.easeInOut};`};
        transition-delay: 0.6s;
      }
    }
  }

  .animate-enter &,
  .animate-exit-active &,
  .change-route-exit-active & {
    h2 {
      &::after {
        transform: translateX(-100%);
        transition: ${(p) => `transform 0.6s ${p.theme.animations.easeInOut};`};
        transition-delay: 0s;
      }

      .title-span {
        opacity: 0;
        transition: ${(p) => `opacity 0.1s ${p.theme.animations.easeInOut};`};
        transition-delay: 0.15s;
      }
    }
  }

  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    grid-column: 6 / span 4;
    grid-row: 4 / span 3;

    h2 {
      font-size: ${(p) => (p.title.length >= 4 ? "4.75vw" : "9.5vw")};
    }
  }

  @media (orientation: portrait) and (min-width: ${(p) =>`${p.theme.bp.desktops}px`}) {
    grid-column: 6 / span 5;

    h2 {
      font-size: ${(p) => (p.title.length >= 4 ? "4.5rem" : "12.5vw")};
    }
  }
`;

export { ProjectContainer, ProjectImg, ProjectIndex, ProjectTitle };
