import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import ProjectDetails from "../components/project/project-details/ProjectDetails";
import ProjectDatas from "../assets/projectsData.json";

const ProjectDetailsRoute = (props) => {
  const [projectInfos, setProjectInfos] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);
  //refs are needed to keep sync of the projects when changing route
  //because of the closure, useState wil show the previous state
  const prevProjectRef = useRef(null);
  const nextProjectRef = useRef(null);
  const id = props.match.params.id;

  useEffect(() => {
    async function getProjectDetails() {
      const project = ProjectDatas.find((obj) => obj.id == id);
      const projectIndex = ProjectDatas.findIndex((obj) => obj.id == id);

      if (projectIndex && projectIndex > 0) {
        prevProjectRef.current = ProjectDatas[projectIndex - 1];
      } else if (projectIndex == 0) {
        prevProjectRef.current = ProjectDatas[ProjectDatas.length - 1];
      } else {
        prevProjectRef.current = null;
      }

      if (
        (projectIndex || projectIndex == 0) &&
        projectIndex < ProjectDatas.length - 1
      ) {
        nextProjectRef.current = ProjectDatas[projectIndex + 1];
      } else if (projectIndex && projectIndex == ProjectDatas.length - 1) {
        nextProjectRef.current = ProjectDatas[0];
      } else {
        nextProjectRef.current = null;
      }

      await setProjectInfos(project || {});

      setLoadingStatus(false);
    }

    getProjectDetails();
  }, [id]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <ProjectDetails
      project={projectInfos}
      nextProject={nextProjectRef.current}
      prevProject={prevProjectRef.current}
      history={props.history}
    />
  );
};

ProjectDetailsRoute.prototype = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default ProjectDetailsRoute;
