import * as React from 'react';
import { SVGProps } from 'react';

const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-.027 2.594a.885.885 0 1 1 0 1.77.885.885 0 0 1 0-1.77ZM6.33 9.64a.884.884 0 1 1-.001-1.768.884.884 0 0 1 .001 1.768Zm2.38-2.392a.884.884 0 1 1-.002-1.769.884.884 0 0 1 .001 1.769Zm2.722 11.813a1.916 1.916 0 0 1-1.325-1.299 1.95 1.95 0 0 1 .644-2.095c.255-.204.416-.501.416-.828v-3.235a.807.807 0 0 1 1.612 0v3.234c0 .33.167.627.424.836.439.356.72.899.72 1.51a1.955 1.955 0 0 1-2.491 1.877Zm3.792-11.813a.884.884 0 1 1-.001-1.768.884.884 0 0 1 .001 1.768Zm2.406 2.392a.884.884 0 1 1-.001-1.768.884.884 0 0 1 .001 1.768Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDashboard;
