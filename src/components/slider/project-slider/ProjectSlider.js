import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { useViewPortWidth } from "../../../utils/getViewport";
import StretchedLink from "../../links/stretched-link/Stretched-link";
import MovingImgWithBg from "../../img/moving-img-with-bg/MovingImgWithBg";
import ErrorBoundary from "../../error/ErrorBoundary";
import { ProjectSliderStyles, Slide } from "./ProjectSlider.Styles";

const ProjectSlider = ({ photos, theme, projectId }) => {
  const width = useViewPortWidth();

  const themeContext = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const additionalSettings = {
    infiniteLoop: true,
    centerMode: true,
    centerSlidePercentage: 65,
    axis:
      width < themeContext.bp.desktops || width < window.innerHeight
        ? "horizontal"
        : "vertical",
    onChange: handleSlideChanges,
    swipeable: true,
    emulateTouch: false,
  };

  //Will update the activeIndex to play/pause slide animation
  function handleSlideChanges(index) {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  }

  return (
    <ErrorBoundary type="slider">
      <ProjectSliderStyles
        additionalSettings={additionalSettings}
        colors={theme}
      >
        {photos &&
          photos.map((photo, index) => (
            <Slide key={`photo${index}`} index={index}>
              <MovingImgWithBg
                imgSrc={`${projectId}/${photo.src}`}
                imgLazy={`${projectId}/${photo.lazy}`}
                imgAlt={photo.alt}
                isActive={index == activeIndex ? true : false}
                isMobile={photo.isMobile}
              />

              {photo.url && (
                <StretchedLink
                  externalLink={true}
                  url={photo.url}
                  ariaLabel={`Visit ${photo.alt}`}
                  srOnly={true}
                />
              )}
            </Slide>
          ))}
      </ProjectSliderStyles>
    </ErrorBoundary>
  );
};

ProjectSlider.propTypes = {
  photos: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default ProjectSlider;
