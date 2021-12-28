import * as React from 'react';
import { SVGProps } from 'react';

const SvgBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M10 20h4V4h-4v16Zm-6 0h4v-8H4v8ZM16 9v11h4V9h-4Z" fill="currentColor" />
  </svg>
);

export default SvgBarChart;
