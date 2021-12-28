import * as React from 'react';
import { SVGProps } from 'react';

const SvgLikeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M2 20h3.636V9.2H2V20Zm20-9.9c0-.99-.818-1.8-1.818-1.8h-5.736l.863-4.113.027-.288c0-.369-.154-.711-.4-.954L13.973 2 7.99 7.931A1.751 1.751 0 0 0 7.455 9.2v9c0 .99.818 1.8 1.818 1.8h8.181c.755 0 1.4-.45 1.673-1.098l2.746-6.345c.081-.207.127-.423.127-.657v-1.8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLikeFill;
