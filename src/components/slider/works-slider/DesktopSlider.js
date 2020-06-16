import React from "react";
import { ThemeProvider } from "styled-components";
// import Project from "./Project";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SliderContainer,
  SliderProject,
  WorkSliderPagination,
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
        // gsap.defaults({ overwrite: "auto", duration: 0.3 });
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
        //refresh need to start scrollTrigger on Firefox
      }).refresh();
    });
  }

  updateSlider(newSection, index) {
    let { currentSlide } = this.state;

    if (newSection !== currentSlide) {
      this.updateTheme(currentSlide, index, newSection);
    }
  }

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
        setTimeout(() => {
          this.setState({
            theme: newTheme,
          });
        }, 1000);
      }
    );
  }

  render() {
    const { theme, activeIndex } = this.state;
    const { slides, width } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <SliderContainer ref={this.sliderRef}>
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
                  width={width}
                />
              ))}
          </div>
        </SliderContainer>
      </ThemeProvider>
    );
  }
}

export default DesktopSlider;
