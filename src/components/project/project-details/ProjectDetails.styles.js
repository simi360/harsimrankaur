import styled from "styled-components";
import Title from "../../text/Title";

const Main = styled.main`
  width: 100%;
  max-width: ${(p) => p.theme.container};
  margin: auto;
  padding: 0 1rem;
  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    display: flex;
  }
`;

const ProjectTitle = styled(Title)`
  margin: 3.75rem 0 0.5rem;
`;

const ProjectCategoryTitle = styled.h3`
  margin-top: 1.5rem;
  font-family: ${(p) => p.theme.font.poppins};
  font-size: 1.125rem;
  font-weight: 500;
`;

export { Main, ProjectTitle, ProjectCategoryTitle };
