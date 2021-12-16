import React from 'react';
import { createStyles, CoSpacing } from '@co-design/styles';

export type GroupPosition = 'right' | 'center' | 'left' | 'apart';

interface GroupStyles {
  inline: boolean;
  position: GroupPosition;
  noWrap: boolean;
  grow: boolean;
  gutter: CoSpacing | number;
  direction: 'row' | 'column';
  align: React.CSSProperties['alignItems'];
  count: number;
}

const POSITIONS = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  apart: 'space-between',
};

export default createStyles((theme, { inline, gutter, position, noWrap, direction, grow, align, count }: GroupStyles) => {
  const gutterValue = gutter in theme.spacing ? theme.spacing[gutter] : gutter;

  return {
    root: {
      boxSizing: 'border-box',
      display: inline ? 'inline-flex' : 'flex',
      flexDirection: direction,
      alignItems: align || (direction === 'row' ? 'center' : grow ? 'stretch' : position === 'apart' ? 'flex-start' : POSITIONS[position]),
      flexWrap: noWrap ? 'nowrap' : 'wrap',
      justifyContent: direction === 'row' ? POSITIONS[position] : undefined,
      gap: gutterValue,
    },

    child: {
      boxSizing: 'border-box',
      maxWidth: grow && direction === 'row' ? `calc(${100 / count}% - ${gutterValue - gutterValue / count}px)` : undefined,
      flexGrow: grow ? 1 : 0,
    },
  };
});
