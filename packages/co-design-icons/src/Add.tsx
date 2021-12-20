import * as React from 'react';
import { SVGProps } from 'react';

const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" fill="currentColor" />
  </svg>
);

export default SvgAdd;
