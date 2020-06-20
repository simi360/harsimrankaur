import styled from "styled-components";

const SliderButtonStyles = styled.button`
  /* doubme && needed to override react-responsive-carousel styles */
  &&.control-prev,
  &&.control-next {
    svg {
      width: 0.75rem;
    }

    &.control-disabled {
      opacity: 0.4;
      display: inline-block;
    }
  }

  &&.control-prev {
    svg {
      transform: scaleX(-1);
    }
  }

  @media (min-width: ${(p) => `${p.theme.bp.tablets}px`}) {
    padding: 0 0.5rem;
  }
`;

export default SliderButtonStyles;
