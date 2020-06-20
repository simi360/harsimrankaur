import styled from "styled-components";
import ImgWithOverflowingBg from "../../../../img/ImgWithOverflowinBg";

const ProjectSection = styled.section`
  width: 100%;
  max-width: ${(p) => `${p.theme.container}px`};
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));

  grid-template-rows: repeat(10, minmax(0, 1fr));
  grid-gap: 1.875rem;
  font-family: ${(p) => p.theme.font.poppins};

  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

const ProjectImg = styled(ImgWithOverflowingBg)`
  width: min(70vh, 40rem, 90%);
  padding-top: min(70vh, 40rem, 100%);
  margin-top: 1vh;
  grid-column: 2 / span 4;
  grid-row: 3 / span 7;
  align-self: center;

  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    grid-row: 2 / span 8;
    grid-column: 3 / span 5;
  }

  @media (orientation: portrait) and (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) {
    grid-column: 2 / span 7;
  }
`;

const ProjectIndex = styled.p`
  width: 0;
  grid-column: 4 / span 3;
  grid-row: 7;
  align-self: end;
  color: ${(p) => p.theme.color.primary};
  font-size: 2.25rem;
  line-height: 0.8;
  letter-spacing: 3px;
  transform-origin: left;
  overflow: hidden;
  z-index: -1;

  &::before {
    content: "";
    width: 68%;
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

  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    grid-column: 7 / span 5;
  }
  @media (min-width: ${(p) => `${p.theme.bp.largeDesktops}px`}) {
    grid-column: 6 / span 5;
    &::before {
      width: 86%;
    }
  }
`;

const ProjectTitle = styled.div`
  grid-column: 4 / span 3;
  grid-row: 5 / span 2;

  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 2;

  h2 {
    width: auto;

    font-size: ${(p) =>
      p.title.length >= 4
        ? "clamp(2.4rem, 8vw, 5.5rem)"
        : "clamp(4rem, 15.5vw, 11.5rem); "};
  }

  @media (min-width: ${(p) => `${p.theme.bp.desktops}px`}) {
    grid-column: 6 / span 4;
    grid-row: 4 / span 3;

    h2 {
      font-size: ${(p) =>
        p.title.length >= 4
          ? "clamp(2.4rem, 4.75vw, 4.5rem)"
          : "clamp(4rem, 9.5vw, 11.5rem); "};
    }
  }

  @media (orientation: portrait) and (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) {
    grid-column: 6 / span 5;

    h2 {
      font-size: ${(p) =>
        p.title.length >= 4
          ? "clamp(2.4rem, 9.5vw, 4.5rem)"
          : "clamp(4rem, 12.5vw, 11.5rem); "};
    }
  }
`;

export { ProjectSection, ProjectImg, ProjectIndex, ProjectTitle };
