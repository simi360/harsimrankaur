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
          Mostly self-taught Full-Stack Developer, who, on top
          of pizza and burrito bowls, loves to make live beautiful web apps and sites.
        </Intro>

        <P>
          After majoring in Computer Science in the USA, I went back to India and worked as a developer but was always intrigued
          and captivated by the creativeness front-end developers displayed. Therefore, I started learning various nuances of front-end
          developing and interned in 2017 as one. Already having experience with back-end I ultimately decided to 
          upgrade careers and became a <b>Full-Stack developer</b>.

          Since then I have gained <b>4 years of experience</b> as Full-Stack developer
          and hold certifications from ZtM Academy, Geeks for Geeks and
          Udemy.
          
        </P>
        <P>
          I have gained experience by working on numerous different projects,
          be it a loan simulator or an e-commerce clothing brand.
        </P>

        <Link>
          For more information here is a{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href=
              "https://drive.google.com/file/d/1QocpLXrZmpFLRgFcN_2J8-6d0jL7Qi65/view?usp=sharing"
              // process.env.PUBLIC_URL+'/img/harsimran-kaur-resume.pdf'
          >
            full resume
          </a>
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
          imgSrc='self.png'
          imgLazy="lazy/self-lazy.png"
          imgAlt="Harsimran Kaur's photo"
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
          <H3>Education</H3>

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
