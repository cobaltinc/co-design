import * as React from 'react';
import { SVGProps } from 'react';

const SvgList = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2 13.2h2.222v-2.4H2v2.4ZM2 18h2.222v-2.4H2V18Zm0-9.6h2.222V6H2v2.4Zm4.444 4.8H22v-2.4H6.444v2.4Zm0 4.8H22v-2.4H6.444V18Zm0-12v2.4H22V6H6.444Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgList;
