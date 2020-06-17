import styled from "styled-components";
import ImgWithOverflowingBg from "../../../../img/ImgWithOverflowinBg";

const ProjectSection = styled.section`
  width: 100%;
  max-width: 1920px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(10, minmax(0, 1fr));
  grid-gap: 1.875rem;
  font-family: ${(p) => p.theme.font.poppins};
`;

const ProjectImg = styled(ImgWithOverflowingBg)`
  width: 90%;
  padding-top: 0;
  grid-column: 3 / span 5;
  grid-row: 3 / span 6;
`;

const ProjectIndex = styled.p`
  width: 0;
  grid-column: 7 / span 4;
  grid-row: 7;
  align-self: end;
  color: ${(p) => p.theme.color.primary};
  text-align: right;
  font-size: 2.25rem;
  line-height: 0.8;
  letter-spacing: 3px;
  transform-origin: left;
  overflow: hidden;
  z-index: -1;

  &::before {
    content: "";
    width: calc(100% - 4.4rem);
    height: 0.25rem;
    margin-right: 1rem;
    position: relative;
    bottom: 0.25rem;
    display: inline-block;
    background: ${(p) => p.theme.color.primary};
    z-index: -1;
  }

  span {
    display: inline-block;
    transform: translateY(200%);
  }
`;

const ProjectTitle = styled.div`
  grid-column: 6 / span 4;
  grid-row: 4 / span 3;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 2;

  h2 {
    width: auto;
    font-size: ${(p) =>
      p.title.length >= 4
        ? "clamp(2.4rem, 4.75vw, 4.5rem)"
        : "clamp(4rem, 9.5vw, 11.5rem); "};
  }
`;

export { ProjectSection, ProjectImg, ProjectIndex, ProjectTitle };
