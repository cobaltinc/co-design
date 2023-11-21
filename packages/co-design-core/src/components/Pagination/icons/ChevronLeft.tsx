import React, { SVGProps } from 'react';

const ChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.0892 16.4226C13.4147 16.0972 13.4147 15.5695 13.0892 15.2441L7.84516 10L13.0892 4.75594C13.4147 4.43051 13.4147 3.90287 13.0892 3.57743C12.7638 3.252 12.2362 3.252 11.9107 3.57743L6.07739 9.41077C5.92111 9.56705 5.83331 9.77901 5.83331 10C5.83331 10.221 5.92111 10.433 6.07739 10.5893L11.9107 16.4226C12.2362 16.748 12.7638 16.748 13.0892 16.4226Z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronLeft;
