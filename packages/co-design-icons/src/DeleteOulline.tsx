import * as React from 'react';
import { SVGProps } from 'react';

const SvgDeleteOulline = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.143 19c0 1.1 1.028 2 2.286 2h9.142c1.258 0 2.286-.9 2.286-2V7H5.143v12Zm2.286-1.714c0 .943.685 1.714 1.523 1.714h6.096c.838 0 1.523-.771 1.523-1.714V7H7.43v10.286ZM20 4h-4l-1.143-1H9.143L8 4H4v2h16V4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDeleteOulline;
