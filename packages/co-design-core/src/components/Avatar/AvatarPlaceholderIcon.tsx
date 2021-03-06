import React from 'react';

export const AvatarPlaceholderIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C14.4853 3 16.5 5.01472 16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3ZM12 14.25C16.9725 14.25 21 16.2638 21 18.75V21H3V18.75C3 16.2638 7.0275 14.25 12 14.25Z"
      />
    </svg>
  );
};
