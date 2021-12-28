import * as React from 'react';
import { SVGProps } from 'react';

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3.637a1.031 1.031 0 0 0-1.459.003L4.44 13.78a1.031 1.031 0 0 0-.289.57l-.807 5.172A1.031 1.031 0 0 0 4.527 20.7l5.169-.828-.163-1.018.73.728 10.102-10.14a1.032 1.032 0 0 0-.003-1.46L16 3.637Zm2.175 5.079L9.04 17.888l-3.438.55.534-3.417 2.757 2.757.73-.73-2.769-2.767 8.422-8.454 2.9 2.889Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPencil;
