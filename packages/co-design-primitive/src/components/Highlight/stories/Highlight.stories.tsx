import React from 'react';
import { Highlight } from '../Highlight';

export default {
  title: '@co-design/primitive/Highlight',
  component: Highlight,
};

export const Default = () => {
  return (
    <div>
      <Highlight highlight={['Lorem', 'amet']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Highlight>
    </div>
  );
};
