import styled from "styled-components";
import {
  translateVerticalDesktops,
  translateVerticalUltraLargeDesktops,
  translateVerticalTablets,
  translateVerticalMobile,
} from "../../../utils/kreyframes";

const BgContainer = styled.div`
  /*if the value 250px of width is changed, it also has to change in keyframes.js to sync the animation*/
  width: ${(p) => (p.isMobile ? "250px" : "100%")};
  position: relative;

  &::before {
    content: "";
    width: calc(100% - 1.25rem);
    height: 100%;
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    background: ${(p) => p.theme.color.primary};
    transition: all 0.25s ease-in-out;
    z-index: -1;
  }
`;
const PlaceHolder = styled.div`
  width: calc(100% - 1.25rem);
  height: 100%;
  position: absolute;
  top: 0;
  filter: blur(5px);
  overflow: hidden;
  transition: opacity 0.15s ease-in;
`;

const ImgContainer = styled.div`
  width: 100%;
  /*if the values of the padding-top are changed, it also has to change in keyframes.js to sync the animation*/
  padding-top: ${(p) => (p.isMobile ? "150%" : "56%")};
  position: relative;
  overflow: hidden;

  .lazy-load-image-background {
    width: calc(100% - 1.25rem);
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: auto;
    display: block;
    transform-origin: top center;

    &.lazy-load-image-loaded {
      animation: ${(p) =>
          p.isMobile ? translateVerticalMobile : translateVerticalTablets}
        ${(p) => (p.isMobile ? "12s" : "10s")} linear infinite;

      animation-play-state: ${(p) => (p.isActive ? "running" : "paused")};
      animation-delay: 1s;

      & + ${PlaceHolder} {
        opacity: 0;
      }
    }

    @media (min-width: ${(p) =>
        `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
      &.lazy-load-image-loaded {
        animation: ${(p) =>
            p.isMobile ? translateVerticalMobile : translateVerticalDesktops}
          10s linear infinite;

        animation-play-state: ${(p) => (p.isActive ? "running" : "paused")};
        animation-delay: 1s;
      }
    }

    @media (min-width: ${(p) =>
        `${p.theme.container}px`}) and (orientation: landscape) {
      &.lazy-load-image-loaded {
        animation: ${(p) =>
            p.isMobile
              ? translateVerticalMobile
              : translateVerticalUltraLargeDesktops}
          10s linear infinite;

        animation-play-state: ${(p) => (p.isActive ? "running" : "paused")};
        animation-delay: 1s;
      }
    }
  }
`;

export { ImgContainer, BgContainer, PlaceHolder };
