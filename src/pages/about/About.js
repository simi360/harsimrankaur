import React from "react";

import {
  Main,
  AboutTitle,
  Img,
  Intro,
  P,
  Link,
  H3,
  FlexSkills,
  SkillP,
  SquareContainer,
  ListItems,
  FlexContainer,
  FlexElem,
  FlexSKillsContainer,
  FlexExpContainer,
  IntroContainer,
} from "./About.styles";

const About = ({
  techSkills,
  otherTechSkills,
  softSkills,
  experiences,
  formations,
}) => {
  return (
    <Main>
      <IntroContainer>
        <AboutTitle title="About" />

        <Intro>
          I am a Belgian, mostly self-taught, Front-End Developer, who, on top
          of beers and fries, loves to making live beautiful designs.
        </Intro>

        <P>
          After 3 years as a Graphic Designer, I have decided to make a change
          of career and become a <strong>Front-End developer</strong>. Later, I
          was one of the 2000 of 200.000 selected for a
          <strong>Google Scholarship</strong> to follow Udacity Front-End
          Nanodregree. At the same time, I was working part time as a Web
          Integrator and all my free time was spent on Udacity.
        </P>
        <P>
          After having graduated, I moved to another agency and became a
          Front-End Developer and worked on different projects, be it a loan
          simulator or and national railway company.
        </P>

        <Link>
          For more informations here is a <a href="/">full resume</a>
        </Link>
      </IntroContainer>

      <FlexSKillsContainer>
        <div>
          <H3>Skills</H3>

          {techSkills &&
            techSkills.map((skill, index) => (
              <FlexSkills key={`skill${index}`}>
                <SkillP>{skill.name}</SkillP>
                <SquareContainer data-number={skill.level}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <div
                      key={`square${num}`}
                      className={num <= skill.level ? "active" : ""}
                    ></div>
                  ))}
                </SquareContainer>
              </FlexSkills>
            ))}
        </div>
        <div>
          <P>
            {otherTechSkills && otherTechSkills.map((skill) => `${skill}, `)}
            ...
          </P>

          <H3>Soft Skills</H3>
          <ul>
            {softSkills &&
              softSkills.map((skill) => (
                <ListItems key={skill}>{skill},</ListItems>
              ))}
          </ul>
        </div>
      </FlexSKillsContainer>

      <FlexExpContainer>
        <Img
          imgSrc="self.png"
          imgLazy="lazy/self-lazy.png"
          imgAlt="Sarah Hick's photo"
        />
        <div>
          <H3>Work experience</H3>

          <FlexContainer>
            {experiences &&
              experiences.map((exp) => (
                <FlexElem key={exp.job}>
                  <p>{exp.year}</p>
                  <p>
                    <span>{exp.job}</span> at {exp.agency}
                  </p>
                </FlexElem>
              ))}
          </FlexContainer>
        </div>
        <div>
          <H3>Formations</H3>

          <FlexContainer>
            {formations &&
              formations.map((formation) => (
                <FlexElem key={formation.year}>
                  <p>{formation.year}</p>
                  <p>
                    <span>{formation.name}</span> at {formation.school}
                  </p>
                </FlexElem>
              ))}
          </FlexContainer>
        </div>
      </FlexExpContainer>
    </Main>
  );
};

export default About;
