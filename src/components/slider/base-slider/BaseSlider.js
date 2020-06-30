import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.css";
import SliderButton from "../slider-button/SliderButton";
import { CarouselStyle } from "./BaseSlider.styles";

const BaseSlider = ({
  additionalSettings,
  //defautl values needed for the first render vefore passing the theme colors
  theme = {
    color: {
      primary: "#fff",
      primaryLight: "#fff",
    },
  },
  children,
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
        {...sliderSettings}
        renderArrowPrev={(onClickHandler, hasFollowingSlide, label) => (
          <SliderButton
            onClickHandler={onClickHandler}
            hasFollowingSlide={hasFollowingSlide}
            label={label}
            isPrev={true}
            colors={theme}
          />
        )}
        renderArrowNext={(onClickHandler, hasFollowingSlide, label) => (
          <SliderButton
            onClickHandler={onClickHandler}
            hasFollowingSlide={hasFollowingSlide}
            label={label}
            isPrev={false}
            colors={theme}
          />
        )}
      >
        {children}
      </CarouselStyle>
    </React.Fragment>
  );
};

BaseSlider.propTypes = {
  additionalSettings: PropTypes.object,
  theme: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BaseSlider;
