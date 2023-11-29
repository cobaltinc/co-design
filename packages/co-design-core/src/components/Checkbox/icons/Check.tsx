import { SVGProps } from 'react';

export const Check = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4.6665" y="4" width="16" height="16" rx="2" fill="currentFill" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9564 8.20675C18.2365 8.48241 18.2365 8.92935 17.9564 9.20502L11.2607 15.7933C10.9806 16.0689 10.5263 16.0689 10.2462 15.7933L7.37662 12.9697C7.09646 12.6941 7.09646 12.2471 7.37662 11.9715C7.65678 11.6958 8.11101 11.6958 8.39117 11.9715L10.7535 14.2958L16.9418 8.20675C17.222 7.93108 17.6762 7.93108 17.9564 8.20675Z"
        fill="currentColor"
      />
    </svg>
  );
};
