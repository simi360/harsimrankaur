import styled from "styled-components";
import Project from "./ProjectAnimated";
import Pagination from "./Pagination";

const SliderContainer = styled.div`
  width: 100vw;
  position: relative;
  overflow: scroll;

  &::before {
    content: "";
    width: calc(100vw / 12 * 5 + 0.5rem);
    height: calc(76% + 1.875rem);
    position: fixed;
    top: calc(7.5% + 1.875rem);
    left: calc((100% / 12 * 4) + 0.6rem);
    display: block;
    background: ${(p) => p.theme.color.primaryLight};
    transition: all 0.25s ease-in-out;
    z-index: -1;
  }
`;

const SliderProject = styled(Project)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const WorkSliderPagination = styled(Pagination)`
  position: fixed;
  top: calc(20% + 0.5rem);
  left: calc(69% + 1.875rem);
  z-index: 10;
  transition: all 0.25s ease-in-out;
`;

export { SliderContainer, SliderProject, WorkSliderPagination };
