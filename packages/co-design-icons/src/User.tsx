import * as React from 'react';
import { SVGProps } from 'react';

const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 11.25c4.973 0 9 2.014 9 4.5V21H3v-2.25c0-2.486 4.027-4.5 9-4.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUser;
