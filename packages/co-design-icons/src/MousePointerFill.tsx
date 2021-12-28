import * as React from 'react';
import { SVGProps } from 'react';

const SvgMousePointerFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask id="mouse-pointer-fill_svg__a" fill="#fff">
      <path fillRule="evenodd" clipRule="evenodd" d="M21.853 10.6 3.126 4.126 9.6 22.853l4.137-8.116 8.116-4.136Z" />
    </mask>
    <path fillRule="evenodd" clipRule="evenodd" d="M21.853 10.6 3.126 4.126 9.6 22.853l4.137-8.116 8.116-4.136Z" fill="currentColor" />
    <path
      d="m3.126 4.126.654-1.89L-.108.892 1.236 4.78l1.89-.654ZM21.853 10.6l1.414 1.415 2.26-2.26-3.02-1.045-.654 1.89ZM9.6 22.853l-1.89.653 1.045 3.021 2.26-2.26L9.6 22.853Zm0 0 1.415 1.414.224-.224.144-.282-1.782-.909Zm4.137-8.116-.908-1.782-.579.295-.295.579 1.782.908Zm8.116-4.136.908 1.782.282-.144.224-.224-1.414-1.414ZM2.473 6.016l18.726 6.475 1.307-3.78L3.78 2.235l-1.307 3.78ZM11.49 22.2 5.016 3.473 1.236 4.78 7.71 23.506l3.78-1.307Zm-3.304-.76 2.828 2.828-2.828-2.829Zm3.196 2.322 4.136-8.116-3.564-1.816-4.136 8.115 3.564 1.817Zm3.263-7.242 8.115-4.136-1.817-3.564-8.115 4.136 1.816 3.564Zm5.793-7.333 2.828 2.829-2.828-2.829Z"
      fill="currentColor"
      mask="url(#mouse-pointer-fill_svg__a)"
    />
  </svg>
);

export default SvgMousePointerFill;
