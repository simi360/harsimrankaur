import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.css";
import SliderButton from "../slider-button/SliderButton";
import { CarouselStyle } from "./BaseSlider.styles";

const BaseSlider = ({
  additionalSettings,
  //defautl values needed for the first render vefore passing the theme colors
  colors = {
    color: {
      primary: "#fff",
      primaryLight: "#fff",
    },
  },
  children,
  className,
}) => {
  //Default settings needs to be in same component as the Carousel
  // When passing all settings as props, isn't taken in account from the Carousel
  const sliderSettings = {
    showThumbs: false,
    showIndicators: false,
    showArrows: true,
    swipeable: true,
    emulateTouch: true,
    showStatus: false,
    ...additionalSettings,
  };

  return (
    <React.Fragment>
      <CarouselStyle
        className={className}
        {...sliderSettings}
        renderArrowPrev={(onClickHandler, hasFollowingSlide, label) => (
          <SliderButton
            onClickHandler={onClickHandler}
            hasFollowingSlide={hasFollowingSlide}
            label={label}
            isPrev={true}
            colors={colors}
          />
        )}
        renderArrowNext={(onClickHandler, hasFollowingSlide, label) => (
          <SliderButton
            onClickHandler={onClickHandler}
            hasFollowingSlide={hasFollowingSlide}
            label={label}
            isPrev={false}
            colors={colors}
          />
        )}
      >
        {children}
      </CarouselStyle>
    </React.Fragment>
  );
};

BaseSlider.propTypes = {
  additionalSettings: PropTypes.object.isRequired,
  colors: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BaseSlider;
