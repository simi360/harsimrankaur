import styled from "styled-components";
import Title from "../../text/Title";
import ArrowLink from "../../icons/ArrowLink";
import ImgBg from "../../img/ImgWithBg";

const Main = styled.main`
  width: 100%;
  max-width: ${(p) => p.theme.container};
  margin: 5rem auto;
  padding: 0 1rem;
  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    display: flex;
  }
`;

const ProjectTitle = styled(Title)`
  margin: 0 0 0.5rem;
  padding: 0.5rem 0.25rem;
  line-height: 0.8;
`;

const CatTitle = styled.h3`
  margin-top: 1.5rem;
  font-family: ${(p) => p.theme.font.poppins};
  font-size: 1.125rem;
  font-weight: 500;
`;

const CatDescription = styled.p`
  font-size: 0.875rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

const Link = styled.a`
  margin-top: 1.5rem;
  display: inline-block;
  color: ${(p) => p.theme.color.primary};
`;

const Arrow = styled(ArrowLink)`
  width: 0.75rem;
  margin-left: 0.75rem;
  transform: translateX(0);
  transition: transform 0.25s ease-in-out;

  ${Link}:hover & {
    transform: translateX(50%);
  }
`;

const Img = styled(ImgBg)`
  width: 100%;
  padding: 0;
`;

const RightSection = styled.section`
  margin-top: 2.65rem;
`;

export {
  Main,
  ProjectTitle,
  CatTitle,
  CatDescription,
  ListItem,
  Link,
  Arrow,
  Img,
  RightSection,
};
