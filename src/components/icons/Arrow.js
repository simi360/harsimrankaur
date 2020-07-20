import React from "react";
import PropTypes from "prop-types";

//The component needs to be written inline
//without the use of SVGR loader to keep the dynamic changes of colors

const ArrowLink = (props) => {
  return (
    <svg
      viewBox="0 0 13 13"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <g transform="matrix(1,0,0,1,-141.207,-5226.83)">
        <g transform="matrix(1,0,0,2.9122,-6119.92,4622.49)">
          <g transform="matrix(1,0,0,0.343383,6119.92,-1587.29)">
            <path
              d="M149.672,5234.29L142.274,5234.29C141.685,5234.29 141.207,5233.81 141.207,5233.22L141.207,5233.04C141.207,5232.45 141.685,5231.97 142.274,5231.97L149.735,5231.97L146.088,5228.85C145.641,5228.47 145.589,5227.79 145.971,5227.35L146.092,5227.2C146.475,5226.76 147.149,5226.7 147.596,5227.09L153.325,5231.99C153.458,5232.05 153.58,5232.14 153.681,5232.26L153.802,5232.4C153.976,5232.61 154.06,5232.86 154.058,5233.1C154.06,5233.35 153.976,5233.6 153.802,5233.8L153.681,5233.94C153.58,5234.06 153.458,5234.15 153.325,5234.22L147.596,5239.12C147.149,5239.5 146.475,5239.45 146.092,5239L145.971,5238.86C145.589,5238.41 145.641,5237.74 146.088,5237.36L149.672,5234.29Z"
              fill={props.color}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

ArrowLink.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ArrowLink;
