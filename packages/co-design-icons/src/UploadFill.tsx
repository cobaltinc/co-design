import * as React from 'react';
import { SVGProps } from 'react';

const SvgUploadFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9 16h6v-6h4l-7-7-7 7h4v6Zm-4 2h14v2H5v-2Z" fill="currentColor" />
  </svg>
);

export default SvgUploadFill;
