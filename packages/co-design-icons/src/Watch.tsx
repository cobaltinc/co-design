import * as React from 'react';
import { SVGProps } from 'react';

const SvgWatch = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.6 13.45a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.735 20.1a6.148 6.148 0 0 1-.736-2.925c0-.76.137-1.488.389-2.16-1.343-.41-2.77-.615-3.788-.615-2.536 0-7.6 1.273-7.6 3.8v1.9h11.735Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 4.425H2.9a.475.475 0 0 0-.475.475V13H1V4.9C1 3.85 1.85 3 2.9 3H20c1.05 0 1.9.85 1.9 1.9v7.35a6.168 6.168 0 0 0-1.425-.807V4.9A.475.475 0 0 0 20 4.425Zm.475 8.711v-.117a4.77 4.77 0 0 1 1.425 1.21v.172a4.774 4.774 0 0 0-1.425-1.265ZM12.682 20H2.29c.192.065.397.1.61.1h9.835a7.316 7.316 0 0 1-.053-.1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.172 12.425a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm-1.425 7.218 4.275-2.468-4.275-2.468v4.936Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgWatch;
