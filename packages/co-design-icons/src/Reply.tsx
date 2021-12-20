import * as React from 'react';
import { SVGProps } from 'react';

const SvgReply = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M4 3h2v12h12v2H4V3Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m19.414 16-4.707 4.707-1.414-1.414L16.586 16l-3.293-3.293 1.414-1.414L19.414 16Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgReply;
