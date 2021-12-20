import * as React from 'react';
import { SVGProps } from 'react';

const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m21.355 18.805-4.468-4.062a1.118 1.118 0 0 1-.238-1.35 7.784 7.784 0 0 0 .826-4.638c-.425-3.346-3.062-6.1-6.389-6.647a7.782 7.782 0 0 0-8.98 8.976c.543 3.325 3.286 5.964 6.624 6.398a7.768 7.768 0 0 0 4.63-.811 1.114 1.114 0 0 1 1.337.23l4.202 4.54c.734.793 2.046.736 2.738-.133.597-.75.426-1.86-.282-2.503Zm-8.41-8.713c0 .222-.181.402-.403.402H7.039a.401.401 0 0 1-.402-.402v-.606c0-.222.18-.401.402-.401h5.503c.222 0 .402.18.402.401v.606Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgZoomOut;
