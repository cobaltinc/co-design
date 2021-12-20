import * as React from 'react';
import { SVGProps } from 'react';

const SvgOnair = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.635 18.433a9 9 0 0 1 0-12.726 1 1 0 0 0-1.414-1.414c-4.295 4.295-4.295 11.259 0 15.554a1 1 0 1 0 1.414-1.414Zm12.726 1.414a1 1 0 0 1 0-1.414 9 9 0 0 0 0-12.726 1 1 0 1 1 1.414-1.414c4.294 4.295 4.294 11.259 0 15.554a1 1 0 0 1-1.414 0Zm-9.896-4.245a5 5 0 0 1 0-7.075A1 1 0 0 0 7.05 7.114a7 7 0 0 0 0 9.904 1 1 0 1 0 1.414-1.415Zm8.533-3.527a5 5 0 0 0-1.467-3.537 1 1 0 1 1 1.414-1.416 7 7 0 0 1 0 9.905 1 1 0 1 1-1.414-1.415 5 5 0 0 0 1.467-3.537Zm-8-.005a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill="currentColor"
    />
    <mask
      id="onair_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={4}
      width={22}
      height={17}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.635 18.433a9 9 0 0 1 0-12.726 1 1 0 0 0-1.414-1.414c-4.295 4.295-4.295 11.259 0 15.554a1 1 0 1 0 1.414-1.414Zm12.726 1.414a1 1 0 0 1 0-1.414 9 9 0 0 0 0-12.726 1 1 0 1 1 1.414-1.414c4.294 4.295 4.294 11.259 0 15.554a1 1 0 0 1-1.414 0Zm-9.896-4.245a5 5 0 0 1 0-7.075A1 1 0 0 0 7.05 7.114a7 7 0 0 0 0 9.904 1 1 0 1 0 1.414-1.415Zm8.533-3.527a5 5 0 0 0-1.467-3.537 1 1 0 1 1 1.414-1.416 7 7 0 0 1 0 9.905 1 1 0 1 1-1.414-1.415 5 5 0 0 0 1.467-3.537Zm-8-.005a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#onair_svg__a)">
      <path fill="currentColor" d="M0 0h24v24H0z" />
    </g>
  </svg>
);

export default SvgOnair;
