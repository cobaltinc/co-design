import * as React from 'react';
import { SVGProps } from 'react';

const SvgAddToPhotos = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6Zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAddToPhotos;
