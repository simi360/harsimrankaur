import React from "react";
import PropTypes from "prop-types";
import PaginationTag from "./Pagination.styles";

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

Pagination.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  sliderLenght: PropTypes.number.isRequired,
};

export default Pagination;
