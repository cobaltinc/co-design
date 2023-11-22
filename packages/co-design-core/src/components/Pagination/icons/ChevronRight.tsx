import React, { SVGProps } from 'react';

const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.91076 3.57739C6.58533 3.90283 6.58533 4.43046 6.91076 4.7559L12.1548 9.99998L6.91076 15.2441C6.58533 15.5695 6.58533 16.0971 6.91076 16.4226C7.2362 16.748 7.76384 16.748 8.08927 16.4226L13.9226 10.5892C14.0789 10.433 14.1667 10.221 14.1667 9.99998C14.1667 9.77897 14.0789 9.567 13.9226 9.41072L8.08927 3.57739C7.76384 3.25195 7.2362 3.25195 6.91076 3.57739Z"
      fill="currentColor"
    />
  </svg>
);

export default ChevronRight;
