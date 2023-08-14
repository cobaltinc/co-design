import React, { SVGProps } from 'react';

const AlertCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0002 28.7999C8.93095 28.7999 3.2002 23.0692 3.2002 16C3.2002 8.93071 8.93095 3.19995 16.0002 3.19995C23.0694 3.19995 28.8002 8.93071 28.8002 16C28.8002 23.0692 23.0694 28.7999 16.0002 28.7999ZM14.4002 15.9993H17.6002V9.59931H14.4002V15.9993ZM14.4002 22.3993H17.6002V19.1993H14.4002V22.3993Z"
    />
  </svg>
);

export default AlertCircle;
