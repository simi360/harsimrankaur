import styled from "styled-components";

const PaginationTag = styled.p`
  width: 5rem;
  height: 5rem;
  padding: 0.75rem;
  font-family: ${(p) => p.theme.font.poppins};
  font-size: 1.125rem;
  letter-spacing: 3px;
  text-align: right;
  color: #fff;
  background-color: ${(p) => p.theme.color.primary};

  span {
    display: block;
    text-align: left;

    &::after {
      content: "";
      position: relative;
      display: block;
      width: 100%;
      height: 2px;
      background: #fff;
    }
  }

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    width: 8.75rem;
    height: 8.75rem;
    padding: 1.5rem;
    font-size: 1.875rem;
  }

  @media (min-width: ${(p) => `${p.theme.bp.largeDesktops}px`}) {
    width: 9.875rem;
    height: 9.875rem;
    font-size: 2.25rem;
  }
`;

export default PaginationTag;
