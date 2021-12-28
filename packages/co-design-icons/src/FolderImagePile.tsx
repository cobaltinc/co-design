import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderImagePile = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3.667 7.2H2v4h.008L2 18.4c0 .88.75 1.6 1.667 1.6h15v-1.6h-15V7.2Zm16.666-1.6h-6.666L12 4H7c-.917 0-1.658.72-1.658 1.6l-.009 9.6c0 .88.75 1.6 1.667 1.6h13.333c.917 0 1.667-.72 1.667-1.6v-8c0-.88-.75-1.6-1.667-1.6Zm-12.5 8.8 3.75-4.8 2.917 3.608 2.083-2.408 2.917 3.6H7.833Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFolderImagePile;
