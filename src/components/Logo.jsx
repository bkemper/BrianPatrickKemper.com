import React from 'react';

const Logo = ({ size = 215 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 215 215"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="v3 - rounded">
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="215"
        height="215"
      >
        <rect
          id="square"
          width="215"
          height="215"
          rx="30"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 215 215)"
          fill="black"
        />
      </mask>
      <g mask="url(#mask0)">
        <rect
          id="foundation"
          width="371.036"
          height="215"
          rx="30"
          transform="matrix(-0.610526 -0.791996 -0.791996 0.610526 283.597 303.526)"
          fill="black"
        />
        <rect
          id="arrow"
          width="371.036"
          height="215"
          rx="30"
          transform="matrix(-0.610202 -0.792246 -0.792246 0.610202 441.74 56.9515)"
          fill="black"
        />
      </g>
    </g>
  </svg>
);

export default Logo;
