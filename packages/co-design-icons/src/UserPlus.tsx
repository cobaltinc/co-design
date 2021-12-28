import * as React from 'react';
import { SVGProps } from 'react';

const SvgUserPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.083 12a4.167 4.167 0 1 1 0-8.333 4.167 4.167 0 0 1 0 8.333Zm7.084 7.5v-1.667A4.167 4.167 0 0 0 12 13.667H6.167A4.167 4.167 0 0 0 2 17.833V19.5a.833.833 0 0 0 1.667 0v-1.667a2.5 2.5 0 0 1 2.5-2.5H12a2.5 2.5 0 0 1 2.5 2.5V19.5a.833.833 0 0 0 1.667 0Zm1.666-5.833V12h-1.666a.833.833 0 1 1 0-1.667h1.666V8.667a.833.833 0 0 1 1.667 0v1.666h1.667a.833.833 0 0 1 0 1.667H19.5v1.667a.833.833 0 1 1-1.667 0Zm-6.25-5.834a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      fill="currentColor"
    />
    <mask
      id="user-plus_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={3}
      width={20}
      height={18}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.083 12a4.167 4.167 0 1 1 0-8.333 4.167 4.167 0 0 1 0 8.333Zm7.084 7.5v-1.667A4.167 4.167 0 0 0 12 13.667H6.167A4.167 4.167 0 0 0 2 17.833V19.5a.833.833 0 0 0 1.667 0v-1.667a2.5 2.5 0 0 1 2.5-2.5H12a2.5 2.5 0 0 1 2.5 2.5V19.5a.833.833 0 0 0 1.667 0Zm1.666-5.833V12h-1.666a.833.833 0 1 1 0-1.667h1.666V8.667a.833.833 0 0 1 1.667 0v1.666h1.667a.833.833 0 0 1 0 1.667H19.5v1.667a.833.833 0 1 1-1.667 0Zm-6.25-5.834a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#user-plus_svg__a)">
      <path fill="currentColor" d="M2 2h20v20H2z" />
    </g>
  </svg>
);

export default SvgUserPlus;
