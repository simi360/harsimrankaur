import styled, { css } from "styled-components";
import Arrow from "../../icons/Arrow";
import { Link } from "react-router-dom";

const linkStyles = css`
  display: flex;
  color: ${(p) => p.theme.color.primary};
`;

const LinkTag = styled(Link)`
  ${linkStyles}
`;

const ExternalLinkTag = styled.a`
  ${linkStyles}
`;

const ArrowIcon = styled(Arrow)`
  width: 0.75rem;
  margin: ${(p) => (p.isReversed ? "0 0.75rem 0 0" : "0 0 0 0.75rem")};
  order: ${(p) => (p.isReversed ? -1 : 1)};

  transform: ${(p) =>
    p.isReversed ? "translateX(0) scaleX(-1)" : "translateX(0)"};
  transition: transform 0.25s ease-in-out;

  ${LinkTag}:hover & {
    transform: ${(p) =>
      p.isReversed ? "translateX(-50%) scaleX(-1)" : "translateX(50%)"};
  }
`;

export { LinkTag, ExternalLinkTag, ArrowIcon };
