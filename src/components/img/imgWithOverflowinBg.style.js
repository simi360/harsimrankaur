import styled from "styled-components";

const ImgContainer = styled.div`
  width: 100%;
  padding-top: 108%;
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
`;

const Img = styled.img`
  width: calc(100% - 1.25rem);
  height: calc(100% - 1.25rem);
  position: absolute;
  top: 0;
  left: 1.25rem;
  object-fit: cover;
`;

export { ImgContainer, Img };
