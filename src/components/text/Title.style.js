import styled from "styled-components";

const TitleTag = styled.h2`
  font-size: 4rem;
  font-family: ${(p) => p.theme.font.poppins};
  color: #fff;
  line-height: 1;
  display: inline-flex;
  align-items: center;

  transition: all 0.25s ease-in-out;

  .title-span {
    padding: 0.8125rem 0.5rem;
    background: ${(p) => p.theme.color.primary};
  }
`;

export default TitleTag;
