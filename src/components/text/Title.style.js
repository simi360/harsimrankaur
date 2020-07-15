import styled from "styled-components";

const TitleTag = styled.h2`
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: 4rem;
  font-family: ${(p) => p.theme.font.poppins};
  color: #fff;
  line-height: 1;
  transition: all 0.25s ease-in-out;
  overflow: hidden;

  &::after {
    content: "";
    width: 150%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background: ${(p) => p.theme.color.primary};
    transform: translateX(-100%);
  }

  h2 {
    position: relative;
  }

  .title-span {
    padding: 1.25rem 0.5rem 0.5rem;
    background: ${(p) => p.theme.color.primary};
  }
`;

export default TitleTag;
