import styled from "styled-components";
import { cubeAnimation } from "../../../utils/kreyframes";
import { FadeUp } from "../../../utils/animations";

const LoaderContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Cube = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  animation: ${cubeAnimation} 1s infinite ${(p) => p.theme.animations.easeInOut};

  /* Animations */
  ${FadeUp}
`;

const P = styled.p`
  margin-top: 2rem;
  font-size: 3rem;
  line-height: 1;
  font-family: ${(p) => p.theme.font.poppins};
  color: ${(p) => p.theme.color.primary};
  text-align: center;

  /* Animations */
  ${FadeUp}
`;

export { LoaderContainer, Cube, P };
