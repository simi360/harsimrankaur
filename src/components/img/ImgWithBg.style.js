import styled from "styled-components";

const ImgContainer = styled.div`
  width: calc(100% - 1.25rem);
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
`;

const Img = styled.img`
  width: 100%;
`;

export { Img, ImgContainer };
