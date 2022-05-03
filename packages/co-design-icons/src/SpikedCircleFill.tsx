import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpikedCircleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#spiked-circle-fill_svg__a)">
      <path
        d="M11.012 4.337c.176-1.128 1.8-1.128 1.976 0l.345 2.213a1 1 0 0 0 1.578.654l1.809-1.321c.922-.673 2.07.475 1.397 1.397l-1.32 1.81a1 1 0 0 0 .653 1.577l2.213.345c1.128.176 1.128 1.8 0 1.976l-2.213.345a1 1 0 0 0-.654 1.578l1.321 1.809c.673.922-.475 2.07-1.397 1.397l-1.81-1.32a1 1 0 0 0-1.577.653l-.345 2.213c-.176 1.128-1.8 1.128-1.976 0l-.345-2.213a1 1 0 0 0-1.578-.654L7.28 18.117c-.922.673-2.07-.475-1.397-1.397l1.32-1.81a1 1 0 0 0-.653-1.577l-2.213-.345c-1.128-.176-1.128-1.8 0-1.976l2.213-.345a1 1 0 0 0 .654-1.578L5.883 7.28c-.673-.922.475-2.07 1.397-1.397l1.81 1.32a1 1 0 0 0 1.577-.653l.345-2.213Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="spiked-circle-fill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSpikedCircleFill;
