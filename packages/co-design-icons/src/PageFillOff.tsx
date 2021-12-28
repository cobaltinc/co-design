import * as React from 'react';
import { SVGProps } from 'react';

const SvgPageFillOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.192 4.192 14 2H6c-1.1 0-1.99.9-1.99 2l-.008 12.383L8 12.384V12h.385L13 7.385V3.5l1.942 1.942 1.25-1.25ZM14.213 9l2.144-2.143 1.25-1.25 2.192-2.192 1.414 1.414-2.192 2.192L20 8v12c0 1.1-.9 2-2 2H5.99a1.977 1.977 0 0 1-1.384-.564l-1.778 1.777L1.414 21.8 4 19.213 9.213 14l2-2 3-3Zm-4.171 7-2 2H16v-2h-5.958Zm4-4-2 2H16v-2h-1.958Zm3.729-3.73L18.5 9h-1.458l.729-.73Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPageFillOff;
