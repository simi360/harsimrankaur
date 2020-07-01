import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import StretchedLink from "../../../../links/Stretched-link";
import Title from "../../../../text/Title";
import {
  ProjectSection,
  ProjectImg,
  ProjectIndex,
  ProjectTitle,
} from "./ProjectDesktop.styles";

import { gsap } from "gsap";
//plugin only downlable on gsap website when having a registered account
import CustomEase from "../../../../../assets/libraries/CustomEase";
gsap.registerPlugin(CustomEase);

const Project = (props) => {
  // refs are needed to be able to use correctly gsap with react
  // for a matter of perf and not having thousands of timelines
  const masterTl = useRef();
  const leaveTl = useRef();
  const enterTl = useRef();

  const projectRef = useRef();
  const titleRef = useRef();
  const imgRef = useRef();
  const indexRef = useRef();
  const linkRef = useRef();

  //making the timelines on project first render using a master timeline
  //making it easier to controll the entering and leaving animations
  useEffect(() => {
    masterTl.current = gsap.timeline({ paused: true });

    CustomEase.create("easeOut", "0.22, 0.61, 0.35, 1");
    CustomEase.create("easeIn", "0.55, 0.05, 0.67, 0.19");
    CustomEase.create("easeInOut", "0.64, 0.04, 0.35, 1");

    masterTl.current.add(leaveSceneAnimation(), "leaveScene");
    masterTl.current.add(enterSceneAnimation(), "enterScene");

    return () => {
      masterTl.current.kill();
      leaveTl.current.kill();
      enterTl.current.kill();
    };
  }, []);

  //project animations executed depending if it's entering or leaving
  useEffect(() => {
    props.isActive
      ? masterTl.current.seek("enterScene").play()
      : masterTl.current.tweenFromTo("leaveScene", "enterScene").play();
  }, [props.isActive]);

  function enterSceneAnimation() {
    enterTl.current = gsap.timeline();

    enterTl.current
      .to(projectRef.current, { zIndex: 100 })
      .fromTo(
        imgRef.current,
        { x: -3000 },
        { duration: 0.5, ease: "easeOut", x: 0 },
        1
      )
      .fromTo(
        titleRef.current,
        { width: 0 },
        { duration: 0.5, ease: "easeInOut", width: "100%" },
        1.3
      )
      .fromTo(
        indexRef.current,
        { width: 0 },
        { duration: 0.3, ease: "easeInOut", width: "100%" },
        1.1
      )
      .fromTo(
        indexRef.current.firstChild,
        { yPercent: 200 },
        { duration: 0.2, ease: "easeOut", yPercent: -200 },
        1.6
      );

    return enterTl.current;
  }

  function leaveSceneAnimation() {
    leaveTl.current = gsap.timeline();

    leaveTl.current
      .fromTo(
        indexRef.current.firstChild,
        {
          duration: 0.1,
          ease: "none",
          yPercent: -200,
        },
        { yPercent: 0 },
        0
      )
      .fromTo(
        indexRef.current,
        { width: "100%" },
        { duration: 0.2, ease: "easeIn", width: 0 },
        0.2
      )
      .fromTo(
        titleRef.current,
        { width: "100%" },
        { duration: 0.5, ease: "easeInOut", width: 0 },
        0.2
      )
      .fromTo(
        imgRef.current,
        { x: 0 },
        { duration: 0.4, ease: "easeIn", x: -3000 },
        0.5
      )
      .to(projectRef.current, { zIndex: -100 });

    return leaveTl.current;
  }

  return (
    <ProjectSection
      className={props.className + " project"}
      ref={projectRef}
      id={props.slide.id}
    >
      <ProjectTitle title={props.slide.name} ref={titleRef}>
        <Title title={props.slide.name} />
      </ProjectTitle>
      <ProjectImg
        imgSrc={
          process.env.NODE_ENV === "development"
            ? `src/assets/${props.slide.photos.thumb.default}`
            : ` ${props.slide.photos.thumb.default}`
        }
        imgAlt=""
        ref={imgRef}
      />
      <ProjectIndex ref={indexRef}>
        <span>
          {props.slideIndex + 1 >= 10
            ? props.slideIndex + 1
            : `0${props.slideIndex + 1}`}
        </span>
      </ProjectIndex>
      <StretchedLink
        url={`/project/${props.slide.id}`}
        ariaLabel={`See ${props.slide.name} details`}
        srOnly={true}
        ref={linkRef}
        isActive={props.isActive}
      />
    </ProjectSection>
  );
};

Project.propTypes = {
  slide: PropTypes.object.isRequired,
  slideIndex: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Project;
