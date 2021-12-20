import * as React from 'react';
import { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.294 14.579h-.904l-.32-.31a7.4 7.4 0 0 0 1.796-4.836 7.433 7.433 0 1 0-7.433 7.433 7.4 7.4 0 0 0 4.837-1.796l.309.32v.904L20.296 22 22 20.296l-5.706-5.717Zm-6.861 0a5.139 5.139 0 0 1-5.146-5.146 5.139 5.139 0 0 1 5.146-5.146 5.139 5.139 0 0 1 5.146 5.146 5.139 5.139 0 0 1-5.146 5.146Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSearch;
