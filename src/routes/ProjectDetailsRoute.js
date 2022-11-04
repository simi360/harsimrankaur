import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import ProjectDetails from "../pages/project-details/ProjectDetails";
import ProjectDatas from "../assets/projectsData.json";
import ErrorBoundary from "../components/error/ErrorBoundary";
import Loader from "../components/loaders/main-loader/MainLoader";

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
      const project = ProjectDatas.find((obj) => obj.id === id);
      const projectIndex = ProjectDatas.findIndex((obj) => obj.id === id);

      if (projectIndex && projectIndex > 0) {
        prevProjectRef.current = ProjectDatas[projectIndex - 1];
      } else if (projectIndex === 0) {
        prevProjectRef.current = ProjectDatas[ProjectDatas.length - 1];
      } else {
        prevProjectRef.current = null;
      }

      if (
        (projectIndex || projectIndex === 0) &&
        projectIndex < ProjectDatas.length - 1
      ) {
        nextProjectRef.current = ProjectDatas[projectIndex + 1];
      } else if (projectIndex && projectIndex === ProjectDatas.length - 1) {
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
    return <Loader />;
  }

  return (
    <ErrorBoundary type="route">
      <ProjectDetails
        project={projectInfos}
        nextProject={nextProjectRef.current}
        prevProject={prevProjectRef.current}
        history={props.history}
      />
    </ErrorBoundary>
  );
};

ProjectDetailsRoute.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  history: PropTypes.object.isRequired,
};

export default ProjectDetailsRoute;
