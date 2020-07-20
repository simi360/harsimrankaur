import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImgContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    width: calc(100% - 1.25rem);
    height: 100%;
    position: absolute;
    top: 1.25rem;
    left: 0;
    background: ${(props) => props.theme.color.primary};
    transition: all 0.25s ease-in-out;
    z-index: -1;
  }

  .lazy-load-image-background {
    width: calc(100% - 1.25rem);
    height: calc(100% - 1.25rem);
    position: absolute;
    top: 0;
    left: 1.25rem;

    &:not(.lazy-load-image-loaded) {
      filter: blur(5px);
    }
  }
`;

const Img = styled(LazyLoadImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { ImgContainer, Img };
