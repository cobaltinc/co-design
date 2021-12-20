import * as React from 'react';
import { SVGProps } from 'react';

const SvgPointerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask id="pointer_outline_svg__a" fill="#fff">
      <path fillRule="evenodd" clipRule="evenodd" d="M21.853 10.6 3.126 4.126 9.6 22.853l4.137-8.116 8.116-4.136Z" />
    </mask>
    <path
      d="m3.126 4.126.654-1.89L-.108.892 1.236 4.78l1.89-.654ZM21.853 10.6l1.414 1.415 2.26-2.26-3.02-1.045-.654 1.89ZM9.6 22.853l-1.89.653 1.045 3.021 2.26-2.26L9.6 22.853Zm0 0 1.415 1.414.224-.224.144-.282-1.782-.909Zm4.137-8.116-.908-1.782-.579.295-.295.579 1.782.908Zm8.116-4.136.908 1.782.282-.144.224-.224-1.414-1.414ZM2.473 6.016l18.726 6.475 1.307-3.78L3.78 2.235l-1.307 3.78ZM11.49 22.2 5.016 3.473 1.236 4.78 7.71 23.506l3.78-1.307Zm-3.304-.76 2.828 2.828-2.828-2.829Zm3.196 2.322 4.136-8.116-3.564-1.816-4.136 8.115 3.564 1.817Zm3.263-7.242 8.115-4.136-1.817-3.564-8.115 4.136 1.816 3.564Zm5.793-7.333 2.828 2.829-2.828-2.829Z"
      fill="currentColor"
      mask="url(#pointer_outline_svg__a)"
    />
    <g filter="url(#pointer_outline_svg__b)">
      <circle cx={13.5} cy={15.5} r={1.5} fill="#FA4D56" />
    </g>
    <defs>
      <filter id="pointer_outline_svg__b" x={8} y={10} width={11} height={11} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius={2} operator="dilate" in="SourceAlpha" result="effect1_dropShadow_316_143" />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0.980392 0 0 0 0 0.301961 0 0 0 0 0.337255 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_316_143" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_316_143" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgPointerOutline;
