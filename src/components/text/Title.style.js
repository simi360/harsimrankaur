import styled from "styled-components";

const TitleTag = styled.h2`
  padding: 0.8125rem 0.5rem;
  font-size: 4rem;
  line-height: 0.875;
  color: #fff;
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.color.primary};
`;

export default TitleTag;
