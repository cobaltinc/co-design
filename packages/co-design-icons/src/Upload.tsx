import * as React from 'react';
import { SVGProps } from 'react';

const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.47 8.03a.75.75 0 1 0 1.06-1.06L12.532 3.97a.746.746 0 0 0-.53-.221h-.004a.748.748 0 0 0-.528.22l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v7.94a.75.75 0 0 0 1.5 0V6.31l1.72 1.72ZM5.25 12v6a2.25 2.25 0 0 0 2.25 2.25h9A2.25 2.25 0 0 0 18.75 18v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 0-1.5 0Z"
      fill="currentColor"
    />
    <mask
      id="upload_svg__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={5}
      y={3}
      width={14}
      height={18}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.47 8.03a.75.75 0 1 0 1.06-1.06L12.532 3.97a.746.746 0 0 0-.53-.221h-.004a.748.748 0 0 0-.528.22l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v7.94a.75.75 0 0 0 1.5 0V6.31l1.72 1.72ZM5.25 12v6a2.25 2.25 0 0 0 2.25 2.25h9A2.25 2.25 0 0 0 18.75 18v-6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 0-1.5 0Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#upload_svg__a)">
      <path fill="currentColor" d="M3 3h18v18H3z" />
    </g>
  </svg>
);

export default SvgUpload;
