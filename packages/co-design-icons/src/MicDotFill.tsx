import * as React from 'react';
import { SVGProps } from 'react';

const SvgMicDotFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.1 2.002a3.333 3.333 0 0 0-3.436 3.332V12a3.333 3.333 0 1 0 6.667 0V7.715A5.002 5.002 0 0 1 12.1 2.002Zm4.899 8.331V12a5 5 0 0 1-10 0v-1.667a.833.833 0 0 0-1.667 0V12c0 3.4 2.544 6.204 5.832 6.615v1.718H8.665a.833.833 0 0 0 0 1.667h6.667a.833.833 0 1 0 0-1.667h-2.501v-1.718A6.668 6.668 0 0 0 18.665 12v-1.667a.833.833 0 0 0-1.666 0Z"
      fill="currentColor"
    />
    <path d="M20 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" />
  </svg>
);

export default SvgMicDotFill;
