import { SVGProps } from 'react';

export const Indeterminate = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4.6665" y="4" width="16" height="16" rx="2" fill="currentFill" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.9165 12C7.9165 11.5858 8.25229 11.25 8.6665 11.25H16.6665C17.0807 11.25 17.4165 11.5858 17.4165 12C17.4165 12.4142 17.0807 12.75 16.6665 12.75H8.6665C8.25229 12.75 7.9165 12.4142 7.9165 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
