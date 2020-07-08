import styled, { css } from "styled-components";
import Arrow from "../../icons/Arrow";
import { Link } from "react-router-dom";

const linkStyles = css`
  display: inline-block;
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
  margin-left: 0.75rem;
  transform: translateX(0);
  transition: transform 0.25s ease-in-out;

  ${LinkTag}:hover & {
    transform: translateX(50%);
  }
`;

export { LinkTag, ExternalLinkTag, ArrowIcon };
