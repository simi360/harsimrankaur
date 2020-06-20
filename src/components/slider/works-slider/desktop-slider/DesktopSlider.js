import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SliderButton from "../slider-button/SliderButton";
import {
  SliderContainer,
  SliderProject,
  WorkSliderPagination,
  SliderButtons,
} from "./DesktopSlider.styles";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

class DesktopSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: null,
      currentSlide: null,
      activeIndex: 0,
      theme: {
        color: {
          primary: this.props.slides[0].colors.primary,
          primaryLight: this.props.slides[0].colors.primaryLight,
        },
      },
    };
  }

  componentDidMount() {
    let projectSlides = gsap.utils.toArray(".project");
    this.setState(
      {
        slides: projectSlides,
        currentSlide: projectSlides[0],
      },
      () => {
        //sets the slider depending the number of slides
        gsap.set(".slider-container", {
          height: projectSlides.length * 100 + "vh",
        });
        this.animateSlides();
      }
    );
  }

  componentWillUnmount() {
    //remove all the scrolltrigger events
    this.state.slides.forEach((slide, index) => {
      ScrollTrigger.getById(`slide${index}`).kill();
    });
  }

  animateSlides() {
    this.state.slides.forEach((slide, i) => {
      ScrollTrigger.create({
        // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
        start: () => (i - 0.5) * innerHeight,
        end: () => (i + 0.5) * innerHeight,
        // when a new section activates (from either direction), set the section accordingly.
        onUpdate: (self) => self.isActive && this.updateSlider(slide, i),
        id: `slide${i}`,
        //refresh needed to start scrollTrigger on Firefox
      }).refresh();
    });
  }

  updateSlider(newSection, index) {
    let { currentSlide } = this.state;

    if (newSection !== currentSlide) {
      this.updateTheme(currentSlide, index, newSection);
    }
  }
  //change theme color depending the slide colors
  updateTheme(slide, index, newSection) {
    let newTheme = {
      color: {
        primary: this.props.slides[index].colors.primary,
        primaryLight: this.props.slides[index].colors.primaryLight,
      },
    };

    this.setState(
      {
        currentSlide: newSection,
        activeIndex: index,
      },
      () => {
        //a timeout is needed to match the color change timing
        //with the triggering of the entering animation
        setTimeout(() => {
          this.setState({
            theme: newTheme,
          });
        }, 1000);
      }
    );
  }

  //will scroll to corresponding slider and active scrollTrigger functions
  onClickHandler(isPrev) {
    if (this.hasFollowingSlide(isPrev)) {
      window.scrollTo({
        top: isPrev
          ? (this.state.activeIndex - 1) * window.innerHeight
          : (this.state.activeIndex + 1) * window.innerHeight,
      });
    }
  }

  hasFollowingSlide(isPrev) {
    if (isPrev && this.state.activeIndex - 1 >= 0) {
      return true;
    } else if (
      !isPrev &&
      this.state.activeIndex + 1 < this.props.slides.length
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { theme, activeIndex } = this.state;
    const { slides } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <SliderContainer>
          <WorkSliderPagination
            activeIndex={activeIndex}
            sliderLenght={slides.length}
          />
          <div className="slider-container">
            {slides &&
              slides.map((slide, index) => (
                <SliderProject
                  slide={slide}
                  slideIndex={index}
                  key={"slide" + index}
                  isActive={activeIndex == index ? true : false}
                />
              ))}
          </div>
          <SliderButtons>
            <SliderButton
              onClickHandler={() => this.onClickHandler(true)}
              hasFollowingSlide={() => this.hasFollowingSlide(true)}
              label="Prevous work"
              isPrev={true}
              colors={this.state.theme}
            />
            <SliderButton
              onClickHandler={() => this.onClickHandler(false)}
              hasFollowingSlide={() => this.hasFollowingSlide(false)}
              label="Next work"
              isPrev={false}
              colors={this.state.theme}
            />
          </SliderButtons>
        </SliderContainer>
      </ThemeProvider>
    );
  }
}

DesktopSlider.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default DesktopSlider;
