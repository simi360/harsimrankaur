import React from "react";
import { LoaderContainer, Cube, P } from "./MainLoader.styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <div>
        <Cube />
        <P>Loading</P>
      </div>
    </LoaderContainer>
  );
};

export default Loader;
