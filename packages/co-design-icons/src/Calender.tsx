import * as React from 'react';
import { SVGProps } from 'react';

const SvgCalender = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 3.5h-3V2H15v1.5H9V2H7.5v1.5h-3C3.6 3.5 3 4.1 3 5v15c0 .9.6 1.5 1.5 1.5h15c.9 0 1.5-.6 1.5-1.5V5c0-.9-.6-1.5-1.5-1.5Zm0 16h-15v-9h15v9Zm0-11.5h-15V5h3v1.5H9V5h6v1.5h1.5V5h3v3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCalender;
