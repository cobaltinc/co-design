import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolderImagePile = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3.667 7.2H2v4h.008L2 18.4c0 .88.75 1.6 1.667 1.6h15v-1.6h-15V7.2Zm4.166 7.2H19.5l-2.917-3.6-2.083 2.408L11.583 9.6l-3.75 4.8Zm12.5-8.8h-6.666L12 4H7c-.917 0-1.658.72-1.658 1.6l-.009 9.6c0 .88.75 1.6 1.667 1.6h13.333c.917 0 1.667-.72 1.667-1.6v-8c0-.88-.75-1.6-1.667-1.6Zm0 9.6H7V5.6h4.308l1.175 1.128.492.472h7.358v8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFolderImagePile;
