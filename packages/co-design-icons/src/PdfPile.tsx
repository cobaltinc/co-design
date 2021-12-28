import * as React from 'react';
import { SVGProps } from 'react';

const SvgPdfPile = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1Zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3Zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5ZM9 9.5h1v-1H9v1ZM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6Zm10 5.5h1v-3h-1v3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPdfPile;
