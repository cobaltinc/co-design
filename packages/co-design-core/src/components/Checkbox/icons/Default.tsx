import { SVGProps } from 'react';

export const Default = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5.6665" y="5" width="14" height="14" rx="1" fill="currentFill" stroke="currentColor" stroke-width="2" />
    </svg>
  );
};
