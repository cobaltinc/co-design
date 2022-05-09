import * as React from 'react';
import { SVGProps } from 'react';

const SvgMicDot = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.33 7.715V12a3.333 3.333 0 1 1-6.666 0V5.333A3.333 3.333 0 0 1 12.1 2.002a5.022 5.022 0 0 0-.056 1.665H12c-.92 0-1.667.746-1.667 1.666V12a1.667 1.667 0 1 0 3.333 0V6.726c.48.43 1.045.769 1.666.989ZM17 12v-1.667a.833.833 0 0 1 1.666 0V12c0 3.4-2.545 6.206-5.834 6.615v1.718h2.501a.833.833 0 1 1 0 1.667H8.665a.833.833 0 0 1 0-1.667h2.5v-1.718A6.668 6.668 0 0 1 5.331 12v-1.667a.833.833 0 0 1 1.667 0V12a5 5 0 0 0 10 0Z"
      fill="currentColor"
    />
    <path d="M20 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" />
  </svg>
);

export default SvgMicDot;
