import styled from "styled-components";
import Turtle from "../../icons/Turtle";
import { rotateTurtle } from "../../../utils/kreyframes";

const Icon = styled(Turtle)`
  width: 7.5rem;
  margin: auto;
  display: block;
  transform: rotate(185deg);
  animation: ${rotateTurtle} 2s infinite;

  @media (min-width: ${(p) =>
      `${p.theme.bp.tablets}px`}) and (orientation: portrait) {
    width: 5rem;
  }
`;

export { Icon };
