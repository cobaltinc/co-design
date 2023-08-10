import React from 'react';

export const Check = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="2.5" width="15" height="15" rx="2" fill="#8A3FFC" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 13.4375L5.625 10.3375L6.61875 9.35625L8.75 11.4688L13.3812 6.875L14.375 7.8625L8.75 13.4375Z"
        fill="white"
      />
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="6" width="10" height="8">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75 13.4375L5.625 10.3375L6.61875 9.35625L8.75 11.4688L13.3812 6.875L14.375 7.8625L8.75 13.4375Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)"></g>
    </svg>
  );
};
