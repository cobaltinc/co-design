import * as React from 'react';
import { SVGProps } from 'react';

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.152 7.771h-3.798v-2.49c0-.936.62-1.154 1.057-1.154h2.68V.014L13.4 0C9.302 0 8.37 3.067 8.37 5.03v2.741H6v4.238h2.37V24h4.984V12.009h3.363l.435-4.238Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFacebook;
