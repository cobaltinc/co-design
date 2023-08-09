import React, { SVGProps } from 'react';

const CloseCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 15.8C3 22.8692 8.73076 28.6 15.8 28.6C22.8692 28.6 28.6 22.8692 28.6 15.8C28.6 8.73076 22.8692 3 15.8 3C8.73076 3 3 8.73076 3 15.8ZM9.92446 9.92435C10.4349 9.41389 11.2625 9.41389 11.773 9.92435L16.0001 14.1515L20.2272 9.92437C20.7376 9.41391 21.5652 9.41391 22.0757 9.92437C22.5861 10.4348 22.5861 11.2624 22.0757 11.7729L17.8486 16L22.0758 20.2272C22.5863 20.7376 22.5863 21.5652 22.0758 22.0757C21.5653 22.5861 20.7377 22.5861 20.2273 22.0757L16.0001 17.8485L11.7729 22.0757C11.2624 22.5862 10.4348 22.5862 9.92435 22.0757C9.41389 21.5653 9.41389 20.7376 9.92435 20.2272L14.1516 16L9.92446 11.7729C9.414 11.2624 9.414 10.4348 9.92446 9.92435Z"
    />
  </svg>
);

export default CloseCircle;