import { RefObject, forwardRef, useImperativeHandle, useState } from 'react';
import { Typography, TypographyProps } from '../Typography';
import { useNumberBoxContext } from './NumberBoxContext';
import { useUpdateEffect } from '@co-design/hooks';

export interface CountRef {
  count: number;
}

interface CountProps extends TypographyProps<'span'> {}

export const Count = forwardRef((props: CountProps, ref: RefObject<CountRef>) => {
  const { isDecrease, currentCount, deletedCount } = useNumberBoxContext();
  const [count, setCount] = useState(currentCount);

  useImperativeHandle(ref, () => ({
    count,
  }));

  useUpdateEffect(() => {
    if (isDecrease && count >= deletedCount) {
      setCount((prev) => prev - 1);
    }
  }, [currentCount]);

  return (
    <Typography variant="caption" {...props}>
      {count}
    </Typography>
  );
});
