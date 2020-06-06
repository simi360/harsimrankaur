import React, { useState, useEffect, useContext } from "react";
import Loader from "../../loader";
import GetViewport from "../../../utils/getViewport";
import WorkSliderMobile from "./MobileSlider";
import { ThemeContext } from "styled-components";

const WorkSlider = () => {
  const [isLoading, setLoadingStatus] = useState(true);
  const [projects, setProjects] = useState([]);
  const { width } = GetViewport();
  const themeContext = useContext(ThemeContext);

  async function getProjects() {
    setTimeout(() => {
      setLoadingStatus(false);
    }, 0);

    const res = await import(
      /* webpackChunkName:'projects' */ "../../../assets/projectsData.json"
    );

    const resArr = res.default;

    setProjects(resArr || []);
  }

  useEffect(() => {
    getProjects();
  }, []);

  if (isLoading || projects.length == 0) {
    return <Loader />;
  }

  return width < themeContext.bp.tablets ? (
    <WorkSliderMobile slides={projects} />
  ) : (
    <div>Desktop</div>
  );
};

export default WorkSlider;
