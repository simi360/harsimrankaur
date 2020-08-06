import React, { useEffect, useState } from "react";
import About from "../pages/about/About";
import SkillDatas from "../assets/skillsData.json";
import ErrorBoundary from "../components/error/ErrorBoundary";

const AboutRoute = () => {
  const [technicalSkills, setTechnicalSkills] = useState(null);
  const [otherTechnicalSkills, setOtherTechnicalSkills] = useState(null);
  const [softSkills, setSoftSkills] = useState(null);
  const [experiences, setExperiences] = useState(null);
  const [formations, setFormations] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);

  useEffect(() => {
    async function getProjectDetails() {
      const techSkills = SkillDatas.technicalSkills;
      const otherTechSkills = SkillDatas.otherTechnicalSkills;
      const softSkillsDatas = SkillDatas.softSkills;
      const exp = SkillDatas.experience;
      const formationsData = SkillDatas.formations;

      await Promise.all([
        setTechnicalSkills(techSkills),
        setOtherTechnicalSkills(otherTechSkills),
        setSoftSkills(softSkillsDatas),
        setExperiences(exp),
        setFormations(formationsData),
      ]);

      setLoadingStatus(false);
    }

    getProjectDetails();
  });

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <ErrorBoundary type="route">
      <About
        techSkills={technicalSkills}
        otherTechSkills={otherTechnicalSkills}
        softSkills={softSkills}
        experiences={experiences}
        formations={formations}
      />
    </ErrorBoundary>
  );
};

export default AboutRoute;
