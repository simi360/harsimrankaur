import styled from "styled-components";
import ImgWithOverflowingBg from "../../img/ImgWithOverflowinBg";
import Title from "../../text/Title";

const ProjectSection = styled.section`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  /* Depending the text length, the last row will be bigger to allow the text to wrap */
  grid-template-rows: ${(p) =>
    p.title.length <= 10
      ? "repeat(4, minmax(0, 4.5rem))"
      : "repeat(3, minmax(0, 4.5rem)) minmax(0, 6rem)"};
  grid-gap: 0 1.875rem;
  font-family: ${(p) => p.theme.font.poppins};
`;

const ProjectImg = styled(ImgWithOverflowingBg)`
  grid-column: 1 / span 3;
`;

const ProjectIndex = styled.p`
  grid-column: 4;
  grid-row: 2;
  align-self: end;
  padding-left: 0.875rem;
  position: relative;
  font-size: 1.5rem;
  line-height: 1;
  letter-spacing: 3px;
  text-align: left;
  color: ${(p) => p.theme.color.primary};
  transition: all 0.25s ease-in-out;

  &::before {
    content: "";
    width: 100%;
    height: 0.25rem;
    position: absolute;
    right: 100%;
    bottom: 0.25rem;
    background: ${(p) => p.theme.color.primary};
    transition: all 0.25s ease-in-out;
    z-index: -1;
  }
`;

const ProjectTitle = styled(Title)`
  grid-column: 2 / span 3;
  grid-row: 4;
  font-size: ${(p) => (p.title.length >= 4 ? "2.4rem" : "4rem")};
  z-index: 2;
`;

export { ProjectSection, ProjectImg, ProjectIndex, ProjectTitle };
