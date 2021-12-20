import * as React from 'react';
import { SVGProps } from 'react';

const SvgPause = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x={6} y={3} width={4} height={18} rx={1} fill="currentColor" />
    <rect x={14} y={3} width={4} height={18} rx={1} fill="currentColor" />
  </svg>
);

export default SvgPause;
