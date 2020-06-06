import React from "react";
import styled from "styled-components";

const PaginationTag = styled.p`
  width: 5rem;
  height: 5rem;
  padding: 0.75rem;
  font-family: ${(p) => p.theme.font.poppins};
  font-size: 1.125rem;
  letter-spacing: 3px;
  text-align: right;
  color: #fff;
  background-color: ${(p) => p.theme.color.primary};

  span {
    display: block;
    text-align: left;

    &::after {
      content: "";
      position: relative;
      display: block;
      width: 100%;
      height: 2px;
      background: #fff;
    }
  }
`;

const Pagination = (props) => {
  return (
    <PaginationTag
      className={props.className}
      aria-label={`slide ${props.activeIndex + 1} on ${props.sliderLenght}`}
    >
      <span>
        {props.activeIndex + 1 >= 10
          ? props.activeIndex + 1
          : `0${props.activeIndex + 1}`}
      </span>{" "}
      {props.sliderLenght >= 10 ? props.sliderLenght : `0${props.sliderLenght}`}
    </PaginationTag>
  );
};

export default Pagination;
