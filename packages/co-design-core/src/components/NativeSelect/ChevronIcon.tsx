import React from 'react';
import { useCoTheme, CoComponentProps, CoSize } from '@co-design/styles';

interface ChevronIconProps extends CoComponentProps, React.ComponentPropsWithoutRef<'svg'> {
  size: CoSize;
  invalid: boolean;
}

const iconSizes = {
  xsmall: 14,
  small: 18,
  medium: 20,
  large: 24,
  xlarge: 28,
};

export const ChevronIcon = ({ size, invalid, style, ...props }: ChevronIconProps) => {
  const theme = useCoTheme();
  const _size = theme.fn.size({ size, sizes: iconSizes });

  return (
    <svg
      width={_size}
      height={_size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: invalid ? theme.palettes.red[6] : theme.colorScheme === 'light' ? theme.palettes.dark[7] : theme.palettes.dark[3], ...style }}
      {...props}
    >
      <path
        d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};
