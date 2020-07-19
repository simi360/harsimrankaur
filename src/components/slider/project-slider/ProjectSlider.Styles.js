import styled from "styled-components";
import BaseSlider from "../base-slider/BaseSlider";
import { FadeUp } from "../../../utils/animations";

const ProjectSliderStyles = styled(BaseSlider)`
  margin: auto;
  position: relative;

  /*animation*/
  ${FadeUp}

  &::before {
    content: "";
    width: 50vw;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    background: ${(p) => p.theme.color.primaryLight};
    transform: translate(100%, -50%);
    transition: ${(p) => `transform 0.5s ${p.theme.animations.easeInOut};`};
    transition-delay: 0.25s;

    .project-enter-done & {
      transform: translate(0, -50%);
      transition: ${(p) => `transform 0.5s ${p.theme.animations.easeInOut};`};
      transition-delay: 0.25s;
    }
  }

  .slider-wrapper {
    overflow: visible;
  }

  .carousel-slider {
    overflow: visible;
    .control-arrow {
      position: absolute;
      bottom: 0;
      left: calc(50vw - 7.5rem);
      z-index: 100;

      &.control-next {
        left: calc(50vw - 4.5rem);
      }
    }
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    &::before {
      content: "";
      width: 100%;
      height: 60vh;
      position: absolute;
      top: 50vh;
      left: 40%;
      background: ${(p) => p.theme.color.primaryLight};
      transform: translate(0, -50%);
    }

    &.carousel-root {
      height: 100vh;
    }
    .carousel-slider {
      height: 100vh;
      padding: 0 0 0 2rem;
      display: flex;
      align-items: center;
      overflow: hidden;

      .control-arrow {
        height: 1.5rem;
        position: absolute;
        top: calc(50% - 1.5rem);
        left: 0.5rem;
        transform-origin: center;
        transform: rotate(90deg);

        &.control-next {
          top: calc(50% + 1.5rem);
          left: 0.5rem;
        }
      }
    }
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.largeDesktops}px`}) and (orientation: landscape) {
    &::before {
      content: "";
      width: 80%;
      height: 0;
      padding-top: 80%;
    }
  }
`;

const Slide = styled.div`
  height: 45vh;
  min-height: 550px;
  padding: 2rem 2rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    height: 55vh;
    padding: 2rem 0 3rem 2rem;
  }
`;

export { ProjectSliderStyles, Slide };
