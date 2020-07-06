import styled from "styled-components";
import Pagination from "../../pagination/Pagination";

const SliderStyle = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .slider-container {
    position: relative;

    &::before {
      content: "";
      width: 50%;
      height: 70%;
      position: absolute;
      top: 0%;
      left: 0;
      background: ${(p) => p.theme.color.primaryLight};
      transform: translate(100%, 43%);
      transition: all 0.25s ease-in-out;
      z-index: -1;
    }
  }

  /* to override the slider imported styles */
  .slider-container,
  .carousel {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 0 1.875rem;
  }

  .carousel {
    grid-template-rows: 6fr 1fr;

    &-root {
      padding-top: 2.5rem;
      grid-column: 1 / span 4;
      grid-row: 1;
    }
  }

  .slider-wrapper {
    grid-column: 1 / span 4;
    overflow: visible;
  }

  /* && needed to override base slider styles*/
  && .control-arrow {
    &.control-prev,
    &.control-next {
      grid-row: 2;
      align-self: end;
    }

    &.control-prev {
      grid-column: 1;
      justify-self: end;
      right: -1rem;
    }

    &.control-next {
      grid-column: 2;
      justify-self: start;
      left: -1rem;
    }
  }
`;

const WorkSliderPagination = styled(Pagination)`
  grid-column: 3;
  grid-row: 1;
  z-index: 2;
  transition: all 0.25s ease-in-out;
`;

export { SliderStyle, WorkSliderPagination };
