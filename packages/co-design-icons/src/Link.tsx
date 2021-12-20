import * as React from 'react';
import { SVGProps } from 'react';

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#link_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m10.91 7.433 1.944-1.944a3.666 3.666 0 1 1 5.186 5.185l-1.945 1.945a.917.917 0 0 0 1.297 1.296l1.944-1.944a5.5 5.5 0 0 0-7.778-7.779L9.613 6.137a.917.917 0 0 0 1.297 1.296Zm1.296 9.075-1.944 1.944a3.666 3.666 0 1 1-5.186-5.185l1.945-1.945a.917.917 0 0 0-1.297-1.296L3.78 11.97a5.5 5.5 0 0 0 7.778 7.779l1.944-1.945a.917.917 0 0 0-1.296-1.296Zm2.593-6.482-5.186 5.185a.917.917 0 0 1-1.296-1.296l5.185-5.185a.917.917 0 0 1 1.297 1.296Z"
        fill="currentColor"
      />
      <mask
        id="link_svg__b"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={19}
        height={20}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m10.91 7.433 1.944-1.944a3.666 3.666 0 1 1 5.186 5.185l-1.945 1.945a.917.917 0 0 0 1.297 1.296l1.944-1.944a5.5 5.5 0 0 0-7.778-7.779L9.613 6.137a.917.917 0 0 0 1.297 1.296Zm1.296 9.075-1.944 1.944a3.666 3.666 0 1 1-5.186-5.185l1.945-1.945a.917.917 0 0 0-1.297-1.296L3.78 11.97a5.5 5.5 0 0 0 7.778 7.779l1.944-1.945a.917.917 0 0 0-1.296-1.296Zm2.593-6.482-5.186 5.185a.917.917 0 0 1-1.296-1.296l5.185-5.185a.917.917 0 0 1 1.297 1.296Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#link_svg__b)">
        <path d="M-4 11.97 11.556-3.585 27.113 11.97 11.556 27.527-4 11.97Z" fill="currentColor" />
      </g>
    </g>
    <defs>
      <clipPath id="link_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLink;
