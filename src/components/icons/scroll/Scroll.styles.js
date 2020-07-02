import styled from "styled-components";
import { translateDot } from "../../../utils/kreyframes";

const ScrollIcon = styled.div`
  width: 1.25rem;
  height: 2rem;
  position: relative;
  border: 2px solid ${(p) => p.theme.color.primary};
  border-radius: 2.5rem;

  &::before {
    content: "";
    width: 0.35rem;
    height: 0.35rem;
    position: relative;
    left: 0.35rem;
    top: 0.25rem;
    display: block;
    background: ${(p) => p.theme.color.primary};
    border-radius: 50%;
    animation: ${translateDot} 1.5s linear infinite;
  }
`;

export default ScrollIcon;
