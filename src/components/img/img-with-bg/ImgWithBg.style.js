import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PlaceHolder = styled.div`
  width: 100%;
  transition: opacity 0.25s ease-in;
`;

const Img = styled(LazyLoadImage)`
  width: 100%;
  opacity: 0;
`;

const ImgContainer = styled.div`
  width: calc(100% - 1.25rem);
  min-height: 250px;
  position: relative;

  &::before {
    content: "";
    width: calc(100%);
    height: 100%;
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    background: ${(props) => props.theme.color.primary};
    transition: all 0.25s ease-in-out;
    z-index: -1;
  }

  .lazy-load-image-background {
    min-height: 100%;

    &.lazy-load-image-loaded {
      & + ${PlaceHolder} {
        opacity: 0;
      }

      ${Img} {
        opacity: 1;
      }
    }
  }
`;

export { Img, ImgContainer, PlaceHolder };
