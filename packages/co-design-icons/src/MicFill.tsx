import * as React from 'react';
import { SVGProps } from 'react';

const SvgMicFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.332 5.333a3.333 3.333 0 0 0-6.667 0V12a3.333 3.333 0 1 0 6.667 0V5.333ZM16.999 12v-1.667a.833.833 0 0 1 1.666 0V12c0 3.4-2.544 6.205-5.833 6.615v1.718h2.5a.833.833 0 1 1 0 1.667H8.665a.833.833 0 0 1 0-1.667h2.5v-1.718A6.668 6.668 0 0 1 5.332 12v-1.667a.833.833 0 0 1 1.667 0V12a5 5 0 0 0 10 0Z"
      fill="currentColor"
    />
    <mask
      id="mic-fill_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={5}
      y={2}
      width={14}
      height={20}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.999 2a3.333 3.333 0 0 1 3.333 3.333V12a3.333 3.333 0 1 1-6.667 0V5.333A3.333 3.333 0 0 1 12 2Zm5 8.333V12a5 5 0 0 1-10 0v-1.667a.833.833 0 0 0-1.667 0V12c0 3.4 2.545 6.205 5.833 6.615v1.718h-2.5a.833.833 0 0 0 0 1.667h6.667a.833.833 0 1 0 0-1.667h-2.5v-1.718A6.668 6.668 0 0 0 18.665 12v-1.667a.833.833 0 0 0-1.666 0Zm-6.667-5a1.667 1.667 0 0 1 3.333 0V12a1.667 1.667 0 1 1-3.333 0V5.333Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#mic-fill_svg__a)">
      <path fill="currentColor" d="M2 2h20v20H2z" />
    </g>
  </svg>
);

export default SvgMicFill;
