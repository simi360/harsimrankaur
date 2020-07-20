import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  max-width: calc(100% - 2.5rem);
  padding: 2rem;
  position: relative;
  background: ${(p) => p.theme.color.primaryLight};
  color: white;
  font-family: ${(p) => p.theme.font.poppins};

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    display: block;
    background: ${(p) => p.theme.color.primary};
    z-index: -1;
  }
`;

const ErrorDefault = () => {
  return (
    <Div>
      <Title>Oops, something went wrong</Title>
    </Div>
  );
};

export default ErrorDefault;
