import * as React from 'react';
import { SVGProps } from 'react';

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.132 2c-1.031 0-1.867.811-1.867 1.812 0 1 .835 1.812 1.867 1.812 1.031 0 1.867-.812 1.867-1.812S15.163 2 14.132 2Zm-.447 5.762c-1.481.12-5.527 3.249-5.527 3.249-.25.181-.175.17.025.507.199.326.174.35.41.194.25-.157.66-.411 1.345-.822 2.64-1.642.423 2.15-.71 8.54-.448 3.164 2.49 1.534 3.25 1.05.747-.47 2.75-1.811 2.95-1.944.274-.181.075-.326-.137-.628-.15-.206-.299-.06-.299-.06-.809.519-2.29 1.606-2.49.917-.236-.688 1.283-5.41 2.117-8.66.137-.773.51-2.464-.934-2.343Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInfo;
