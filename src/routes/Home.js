import React from "react";

import { Btn } from "../components/btn";
import styled from "styled-components";

const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 6rem;
  color: tomato;
  margin-bottom: 2rem;
  grid-column: 5 / span 4;
  grid-row: 3 / span 1;
  text-align: center;
`;

const GridButton = styled(Btn)`
  grid-column: 10 / span 1;
  grid-row: 4 / span 1;
`;

const Home = () => {
  return (
    <Grid>
      <Title>Portfolio</Title>
      <GridButton color="tomato">Grid button</GridButton>
    </Grid>
  );
};

export default Home;
