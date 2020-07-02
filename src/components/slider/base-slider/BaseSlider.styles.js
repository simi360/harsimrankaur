import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

const CarouselStyle = styled(Carousel)`
  .slide {
    background: none;
  }

  .control-arrow {
    &.control-prev,
    &.control-next {
      padding: 1rem 1rem 0;
      position: relative;
      top: auto;
      right: auto;
      bottom: 0;
      left: auto;
      opacity: 1;

      &::before {
        display: none;
      }

      :hover {
        background: none;
      }
    }
  }
`;

export { CarouselStyle };
