import styled from "styled-components";
import ImgWithOverflowingBg from "../../img/imgWithOverflowinBg";
import Title from "../../text/Title";

const ProjectSection = styled.section`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 4.5rem));
  grid-gap: 0 1.875rem;
  font-family: ${(p) => p.theme.font.poppins};

  &::before {
    content: "";
    width: 50%;
    height: 90%;
    position: absolute;
    top: 0%;
    left: 0;
    transform: translate(100%, 35%);
    background: ${(p) => p.theme.color.primaryLight};
    z-index: -1;
  }
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

  &::before {
    content: "";
    width: 100%;
    height: 0.25rem;
    position: absolute;
    right: 100%;
    bottom: 0.25rem;
    background: ${(p) => p.theme.color.primary};
    z-index: -1;
  }
`;

const ProjectTitle = styled(Title)`
  grid-column: 2 / span 3;
  grid-row: 4;
  z-index: 2;
`;

export { ProjectSection, ProjectImg, ProjectIndex, ProjectTitle };
