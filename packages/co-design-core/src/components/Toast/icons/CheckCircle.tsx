import React, { SVGProps } from 'react';

const CheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.8 28.6C8.73076 28.6 3 22.8692 3 15.8C3 8.73076 8.73076 3 15.8 3C22.8692 3 28.6 8.73076 28.6 15.8C28.6 22.8692 22.8692 28.6 15.8 28.6ZM13.2115 22.4161L8.32422 17.3131C8.05193 17.0323 8.05193 16.5753 8.32422 16.2916L9.31145 15.2715C9.58375 14.9908 10.0264 14.9908 10.2987 15.2715L13.7058 18.8438L21.3007 10.8913C21.573 10.6106 22.0156 10.6106 22.2879 10.8913L23.2752 11.9128C23.5475 12.1936 23.5475 12.6521 23.2752 12.9313L14.1988 22.4161C13.9265 22.6969 13.4838 22.6969 13.2115 22.4161"
    />
  </svg>
);

export default CheckCircle;
