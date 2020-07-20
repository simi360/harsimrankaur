import { css } from "styled-components";

const FadeUp = css`
  transform: translateY(5rem);
  opacity: 0;
  transition: ${(p) => `all 0.75s ${p.theme.animations.easeInOut};`};

  /* .change-route-exit-active &,
  .project-appear &,
  .project-appear-active &,
  .project-exit &,
  .project-exit-active & {
    transform: translateY(5rem);
    opacity: 0;
    transition: ${(p) => `all 0.75s ${p.theme.animations.easeInOut};`};
  } */
  .load-enter-done &,
  .change-route-enter-done &,
  .project-enter-done & {
    transform: translateY(0);
    opacity: 1;
    transition: ${(p) => `all 0.75s ${p.theme.animations.easeInOut};`};
  }
`;

const FadeLeft = css`
  transform: translateX(-5rem);
  opacity: 0;
  transition: ${(p) => `all 0.75s ${p.theme.animations.easeInOut};`};

  /* .change-route-exit-active &,
  .project-appear &,
  .project-appear-active &,
  .project-exit &,
  .project-exit-active & {
    transform: translateX(-5rem);
    opacity: 0;
    transition: ${(p) => `all 0.75s ${p.theme.animations.easeInOut};`};
  } */

  .change-route-enter-done &,
  .project-enter-done & {
    transform: translateX(0);
    opacity: 1;
    transition: ${(p) => `all 0.75s ${p.theme.animations.easeInOut};`};
  }
`;

export { FadeUp, FadeLeft };
