import styled from "styled-components";

const TitleTag = styled.h2`
  padding: 0.8125rem 0.5rem;
  font-size: 4rem;
  font-family: ${(p) => p.theme.font.poppins};
  color: #fff;
  line-height: 1;
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.color.primary};
  transition: all 0.25s ease-in-out;
`;

export default TitleTag;
