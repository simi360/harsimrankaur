import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(p) => p.theme.font.raleway};

  div {
    text-align: center;
  }
`;

const Label = styled.label`
  margin-bottom: 2rem;
  display: block;
  color: ${(p) => p.theme.color.primary};
  font-weight: bold;
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.25rem;
  border: ${(p) => `2px solid ${p.theme.color.primary}`};
  color: ${(p) => p.theme.color.grey};
  box-shadow: ${(p) => `5px 5px 0 ${p.theme.color.primary}`};
`;

export { Main, Label, Input };
