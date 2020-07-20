import styled, { css } from "styled-components";

const Befores = css`
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: ${(p) => p.theme.color.primary};
    transition-delay: 0.25s;
    z-index: -1;
  }
`;

const TextTabletsStyles = css`
  padding: 1rem;
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.color.primaryLight};
  ${Befores}
`;

const TextDesktopsStyles = css`
  padding: 0 1.5rem;
  justify-content: center;
`;

const enterRight = css`
  transform: translateX(5rem);
  opacity: 0;
  transition: ${(p) => `all 0.75s ${p.theme.animations.easeInOut};`};

  /* Animation needs to be on before's grand-parent because transform messes with the stacking context (z-index)*/
  .load-enter-done & {
    transform: translateX(0);
    opacity: 1;
  }
`;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  max-width: ${(p) => `${p.theme.container}px`};
  margin: auto;
  color: white;
  font-family: ${(p) => p.theme.font.poppins};
  font-weight: bold;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const FadeUpDiv = styled.div`
  width: 100%;
  transform: translateY(5rem);
  opacity: 0;
  transition: ${(p) => `all 0.75s ${p.theme.animations.easeInOut};`};

  /* Animation needs to be on before's grand-parent because transform messes with the stacking context (z-index)*/
  .load-enter-done & {
    transform: translateY(0);
    opacity: 1;
  }

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    transform: translateY(0);
    opacity: 1;
  }
`;

const GridDiv = styled.div`
  width: calc(100% - 1rem);
  padding: 6rem 2.5rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: ${(p) => p.theme.color.primaryLight};

  ${Befores}

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    width: 100%;
    max-height:100vh;
    padding: 0;
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: repeat(6, minmax(0,1fr));
    grid-template-columns: repeat(6, minmax(0,1fr));
    background: none;

    &::before {
      display: none;
    }
  }
  @media (min-width: ${(p) =>
    `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    grid-template-rows: repeat(10, minmax(0,1fr));
    grid-template-columns: repeat(12, minmax(0,1fr));
  }
`;

const spans = css`
  display: inline-block;
  position: relative;
  line-height: 0.9;
  text-transform: uppercase;
  text-shadow: ${(p) => `5px 5px ${p.theme.color.primary}`};

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    ${TextTabletsStyles}
    height: 100%;
    text-shadow: ${(p) => `10px 6px ${p.theme.color.primary}`};
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    ${TextDesktopsStyles}
  }
`;

const FirstNameSpan = styled.span`
  ${spans}
  font-size: 19vw;
  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    font-size: 12.5vw;
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    font-size: min(8.5vw, 10rem);
  }
`;

const FirstNameDiv = styled.div`
  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    ${enterRight}
    height:100%;
    grid-row: 3;
    grid-column: 2 / span 3;
  }
  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    grid-row: 4 / span 2;
    grid-column: 4 / span 4;
  }
`;

const LastNameSpan = styled.span`
  ${spans}
  font-size: 22vw;
  letter-spacing: 3.5vw;
  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    font-size: 16vw;
    letter-spacing: min(1.5vw, 2rem);
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    font-size: min(10vw, 11rem);
  }
`;

const LastNameDiv = styled.div`
  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    ${enterRight}
    height:100%;
    grid-row: 4;
    grid-column: 3 / span 3;
    transition-delay: 0.1s;
  }
  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    grid-row: 6 / span 2;
    grid-column: 6 / span 4;
  }
`;

const JobParagraph = styled.p`
  color: ${(p) => p.theme.color.primary};
  font-size: 5.5vw;

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    ${TextTabletsStyles}
    font-size: 4.5vw;
    line-height: 1;
    color: white;
    text-shadow: ${(p) => `3px 3px ${p.theme.color.primary}`};
  }
  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    font-size: min(2vw, 2.75rem);
  }
`;

const JobDiv = styled.div`
  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    ${enterRight}
    height:100%;
    grid-row: 1;
    align-self: flex-end;
    grid-column: 4 / span 2;
    transition-delay: 0.1s;
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.desktops}px`}) and (orientation: landscape) {
    grid-row: 3;
    grid-column: 9 / span 2;
  }
`;

export {
  Main,
  GridDiv,
  FirstNameDiv,
  FirstNameSpan,
  LastNameDiv,
  LastNameSpan,
  JobDiv,
  JobParagraph,
  FadeUpDiv,
};
