import * as React from 'react';
import { SVGProps } from 'react';

const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.55 20.03 12 21.35l1.45-1.31.04-.036C18.616 15.344 22 12.27 22 8.5 22 5.42 19.58 3 16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.777 3.394 6.855 8.537 11.518l.013.012Zm.29-2.037L12 19l1.16-1 .032-.027C17.294 14.418 20 12.073 20 9.196 20 6.846 18.064 5 15.6 5c-1.132 0-2.228 1.339-3.066 2.364-.193.235-.371.454-.534.636-.163-.182-.341-.4-.534-.636C10.628 6.34 9.532 5 8.4 5 5.936 5 4 6.846 4 9.196c0 2.882 2.716 5.23 6.83 8.788l.01.009Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHeart;
