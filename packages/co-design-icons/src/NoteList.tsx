import * as React from 'react';
import { SVGProps } from 'react';

const SvgNoteList = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 10h11v2H3v-2Zm0-2h11V6H3v2Zm0 8h7v-2H3v2Zm15.01-3.13.71-.71a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12Zm-.71.71-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNoteList;
