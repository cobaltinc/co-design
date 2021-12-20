import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrendingFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="m22 12-4-4v3H3v2h15v3l4-4Z" fill="currentColor" />
  </svg>
);

export default SvgTrendingFlat;
