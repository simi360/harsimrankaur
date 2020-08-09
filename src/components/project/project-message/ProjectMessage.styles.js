import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  padding-top: 1.25rem;
  display: flex;
  align-items: center;
  color: white;
  position: relative;

  &::before {
    content: "";
    width: 75%;
    height: 75vh;
    position: absolute;
    top: 50%;
    right: 0;
    display: block;
    background: ${(p) => p.theme.color.primaryLight};
    transform: translateY(-50%);
    z-index: -1;
  }

  div {
    width: calc(100% - 1.25rem);
    padding: 4rem 2rem;
    background: ${(p) => p.theme.color.primary};
  }

  p {
    width: 20ch;
    max-width: 100%;
    margin: auto;
    font-size: 2rem;
    text-align: center;
  }

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    padding-top: 0;
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.tablets}px`}) and (orientation: landscape) {
    height: 100vh;
    max-width: 1000px;
    /* height: 50vh; */
    position: absolute;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);

    div {
      width: calc(100% - 8rem);
      margin-left: 2rem;
    }
  }

  @media (min-width: ${(p) =>
      `${p.theme.bp.tablets}px`}) and (orientation: portrait) {
    min-height: 32vh;
    &::before {
      height: 100%;
    }

    div {
      max-width: 550px;
      margin: auto;
      padding: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export { Div };
