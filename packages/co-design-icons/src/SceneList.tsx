import * as React from 'react';
import { SVGProps } from 'react';

const SvgScenelist = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4 5a1 1 0 0 1 1-1h5.2a1 1 0 0 1 1 1v5.2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM4 13.1a1 1 0 0 1 1-1h5.2a1 1 0 0 1 1 1v5.2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5.2ZM12.102 5a1 1 0 0 1 1-1h5.2a1 1 0 0 1 1 1v5.2a1 1 0 0 1-1 1h-5.2a1 1 0 0 1-1-1V5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.097 12.1v7.2h7.2v-7.2h-7.2Zm-.9-1.8a.9.9 0 0 0-.9.9v9a.9.9 0 0 0 .9.9h9a.9.9 0 0 0 .9-.9v-9a.9.9 0 0 0-.9-.9h-9Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.398 11.2a1.8 1.8 0 0 1 1.8-1.8h9a1.8 1.8 0 0 1 1.8 1.8v9a1.8 1.8 0 0 1-1.8 1.8h-9a1.8 1.8 0 0 1-1.8-1.8v-9Zm.9 0a.9.9 0 0 1 .9-.9h9a.9.9 0 0 1 .9.9v9a.9.9 0 0 1-.9.9h-9a.9.9 0 0 1-.9-.9v-9Z"
      fill="#fff"
    />
  </svg>
);

export default SvgScenelist;
