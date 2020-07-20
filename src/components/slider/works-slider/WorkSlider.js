import React, { useState, useEffect, useContext } from "react";
import Loader from "../../loader";
import WorkSliderMobile from "./mobile-slider/MobileSlider";
import DesktopSlider from "./desktop-slider/DesktopSlider";
import { ThemeContext } from "styled-components";
import { useViewPortWidth } from "../../../utils/getViewport";
import ProjectDatas from "../../../assets/projectsData.json";
import ErrourBoundary from "../../error/ErrorBoundary";

const WorkSlider = () => {
  const [isLoading, setLoadingStatus] = useState(true);
  const [projects, setProjects] = useState([]);

  const themeContext = useContext(ThemeContext);
  const width = useViewPortWidth();

  async function getProjects() {
    setTimeout(() => {
      setLoadingStatus(false);
    }, 0);

    await setProjects(ProjectDatas || []);
  }

  useEffect(() => {
    getProjects();
  }, []);

  if (isLoading || projects.length == 0) {
    return <Loader />;
  }

  //the components are shown depending the screen size
  return width < themeContext.bp.tablets ||
    (width < themeContext.bp.desktops && width >= window.innerHeight) ? (
    <ErrourBoundary type="layout">
      <WorkSliderMobile slides={projects} />
    </ErrourBoundary>
  ) : (
    <ErrourBoundary type="layout">
      <DesktopSlider slides={projects} />
    </ErrourBoundary>
  );
};

export default WorkSlider;
