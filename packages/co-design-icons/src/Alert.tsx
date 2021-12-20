import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.778 19a1.778 1.778 0 0 1-3.556 0h3.556ZM12 3c.49 0 .889.398.889.889v.96a5.34 5.34 0 0 1 4.444 5.262v5.333L20 18.111H4l2.667-2.667v-5.333A5.34 5.34 0 0 1 11.11 4.85v-.96c0-.491.398-.889.889-.889Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlert;
