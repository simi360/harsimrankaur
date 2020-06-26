import React, { useEffect, useState } from "react";
import ProjectDetails from "../components/project/project-details/ProjectDetails";
import ProjectDatas from "../assets/projectsData.json";

const ProjectDetailsRoute = ({
  match: {
    params: { id },
  },
}) => {
  const [projectInfos, setProjectInfos] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);

  useEffect(() => {
    async function getProjectDetails() {
      const project = ProjectDatas.find((obj) => obj.id == id);

      await setProjectInfos(project || {});

      setLoadingStatus(false);
    }

    getProjectDetails();
  }, [id]);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return <ProjectDetails project={projectInfos} />;
};

export default ProjectDetailsRoute;
