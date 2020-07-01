import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StretchedLinksStyles = css`
  visibility: ${(p) => (p.srOnly ? "hidden" : "")};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: "auto";
    z-index: 1;
  }
`;

const LinkTag = styled(Link)`
  ${StretchedLinksStyles}
`;

const ExternalLinkTag = styled.a`
  ${StretchedLinksStyles}
`;

export { LinkTag, ExternalLinkTag };
