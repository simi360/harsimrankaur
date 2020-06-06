import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  padding-top: 5rem;
  color: ${(p) => p.theme.color.primary};
`;

const About = () => {
  return <Title>About</Title>;
};

export default About;
