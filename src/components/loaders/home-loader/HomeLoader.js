import React from "react";
import {
  Main,
  GridDiv,
  FirstNameDiv,
  FirstNameSpan,
  LastNameDiv,
  LastNameSpan,
  JobDiv,
  JobParagraph,
  FadeUpDiv,
} from "./HomeLoader.styles";

const HomeLoader = () => {
  return (
    <Main>
      <FadeUpDiv>
        <GridDiv>
          <h1 className="read-only">Sarah Hick</h1>
          <FirstNameDiv>
            <FirstNameSpan>Sarah</FirstNameSpan>
          </FirstNameDiv>
          <LastNameDiv>
            <LastNameSpan>Hick</LastNameSpan>
          </LastNameDiv>

          <JobDiv>
            <JobParagraph>Front-End Developer</JobParagraph>
          </JobDiv>
        </GridDiv>
      </FadeUpDiv>
    </Main>
  );
};

export default HomeLoader;
