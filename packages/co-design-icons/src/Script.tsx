import * as React from 'react';
import { SVGProps } from 'react';

const SvgScript = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 3.667H6c-.276 0-.5.248-.5.555v15.556c0 .307.224.555.5.555h12c.276 0 .5-.248.5-.555V4.222c0-.307-.224-.555-.5-.555ZM6 2c-1.105 0-2 .995-2 2.222v15.556C4 21.005 4.895 22 6 22h12c1.105 0 2-.995 2-2.222V4.222C20 2.995 19.105 2 18 2H6Z"
      fill="currentColor"
    />
    <path
      d="M8 8.7a.7.7 0 0 1 .7-.7h6.6a.7.7 0 1 1 0 1.4H8.7a.7.7 0 0 1-.7-.7ZM8 14.7a.7.7 0 0 1 .7-.7h3.6a.7.7 0 1 1 0 1.4H8.7a.7.7 0 0 1-.7-.7ZM8 11.7a.7.7 0 0 1 .7-.7h6.6a.7.7 0 1 1 0 1.4H8.7a.7.7 0 0 1-.7-.7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgScript;
