import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.css";
import Project from "../../../project/project-mobile/ProjectMobile";
import { ThemeProvider, withTheme } from "styled-components";
import { SliderStyle, WorkSliderPagination } from "./MobileSlider.styles";
import BaseSlider from "../../base-slider/BaseSlider";
import ErrorBoundary from "../../../error/ErrorBoundary";

class WorkSliderMobile extends React.Component {
  state = {
    activeIndex: 0,
    theme: {
      color: {
        primary: this.props.slides[0].colors.primary || "black",
        primaryLight: this.props.slides[0].colors.primaryLight || "grey",
      },
    },
  };

  //Will update the activeIndex to pass to the pagination component
  // and update the primary/primaryLight Colors of the theme to the project given colors
  handleSlideChanges = (index) => {
    if (this.state.activeIndex !== index) {
      let newTheme = { ...this.state.theme };
      newTheme.color.primary = this.props.slides[index].colors.primary;
      newTheme.color.primaryLight = this.props.slides[
        index
      ].colors.primaryLight;
      this.setState({
        activeIndex: index,
        theme: newTheme,
      });
    }
  };

  render() {
    const { activeIndex } = this.state;
    const { slides } = this.props;

    const additionalSettings = {
      onChange: this.handleSlideChanges.bind(this),
    };

    return (
      <ErrorBoundary type="slider">
        <ThemeProvider theme={this.state.theme}>
          <SliderStyle>
            <div className="slider-container">
              <WorkSliderPagination
                activeIndex={activeIndex}
                sliderLenght={slides.length}
              />

              <BaseSlider
                additionalSettings={additionalSettings}
                colors={this.state.theme}
              >
                {slides &&
                  slides.map((slide, index) => (
                    <Project
                      slide={slide}
                      slideIndex={index}
                      key={"slide" + index}
                    />
                  ))}
              </BaseSlider>
            </div>
          </SliderStyle>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }
}

WorkSliderMobile.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default withTheme(WorkSliderMobile);
