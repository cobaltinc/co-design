import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlaylist = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 10h12v2H4v-2Zm0-4h12v2H4V6Zm0 8h8v2H4v-2Zm10 0v6l5-3-5-3Z" fill="#212121" />
  </svg>
);

export default SvgPlaylist;
