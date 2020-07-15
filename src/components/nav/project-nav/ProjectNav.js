import React from "react";
import PropTypes from "prop-types";
import {
  ProjectsNavigation,
  NavLink,
  LegendSpan,
  LinkText,
} from "./ProjectNav.styles";

const ProjectNav = ({ prevProject, nextProject, className, clickHandler }) => {
  return (
    <ProjectsNavigation className={className}>
      {prevProject && (
        <NavLink
          to={{
            pathname: `/project/${prevProject.id}`,
            state: { prevHash: location.hash },
          }}
          onClick={(e) => clickHandler(e, `/project/${prevProject.id}`)}
          aria-label={`See ${prevProject.name}'s details`}
        >
          <span>
            <LegendSpan>Previous project:</LegendSpan>
            <LinkText>{prevProject.name}</LinkText>
          </span>
        </NavLink>
      )}
      {nextProject && (
        <NavLink
          to={{
            pathname: `/project/${nextProject.id}`,
            state: { prevHash: location.hash },
          }}
          onClick={(e) => clickHandler(e, `/project/${nextProject.id}`)}
          aria-label={`See ${nextProject.name}'s details`}
        >
          <span>
            <LegendSpan>Next project:</LegendSpan>
            <LinkText>{nextProject.name}</LinkText>
          </span>
        </NavLink>
      )}
    </ProjectsNavigation>
  );
};

ProjectNav.propTypes = {
  prevProject: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  nextProject: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

export default ProjectNav;
