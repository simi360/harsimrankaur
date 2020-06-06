import React from "react";
import Project from "./Project";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

import { SliderStyle, WorkSliderPagination } from "./WorkSlider.styles";

class WorkSliderMobile extends React.Component {
  state = {
    activeIndex: 0,
  };

  updateActiveIndex = (index) => {
    if (this.state.activeIndex !== index) {
      this.setState({
        activeIndex: index,
      });
    }
  };

  render() {
    const { activeIndex } = this.state;
    const { slides } = this.props;

    const sliderSettings = {
      showThumbs: false,
      showIndicators: false,
      showArrows: true,
      swipeable: true,
      emulateTouch: true,
      showStatus: false,
    };

    return (
      <SliderStyle>
        <div className="slider-container">
          <WorkSliderPagination
            activeIndex={activeIndex}
            sliderLenght={slides.length}
          />
          <Carousel {...sliderSettings} onChange={this.updateActiveIndex}>
            {slides &&
              slides.map((slide, index) => (
                <Project
                  slide={slide}
                  slideIndex={index}
                  key={"slide" + index}
                />
              ))}
          </Carousel>
        </div>
      </SliderStyle>
    );
  }
}

export default WorkSliderMobile;
