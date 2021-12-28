import * as React from 'react';
import { SVGProps } from 'react';

const SvgTrash2 = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.57 4.929v.642h5.144v1.286h-1.286v12.214A1.929 1.929 0 0 1 16.499 21h-9a1.929 1.929 0 0 1-1.928-1.929V6.857H4.285V5.571h5.143V4.93c0-1.066.863-1.929 1.929-1.929h1.285c1.065 0 1.929.863 1.929 1.929Zm-3.214-.643a.643.643 0 0 0-.643.643v.643h2.572v-.643a.643.643 0 0 0-.643-.643h-1.286Zm5.787 14.785a.643.643 0 0 1-.643.643h-9a.643.643 0 0 1-.643-.643V6.857h10.286v12.214ZM8.785 9.43h1.286v7.714H8.785V9.43Zm3.858 0h-1.286v7.714h1.286V9.43Zm2.57 0h-1.286v7.714h1.286V9.43Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTrash2;
