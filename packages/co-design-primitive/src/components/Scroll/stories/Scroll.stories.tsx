import React from 'react';
import { Scroll } from '../Scroll';

export default {
  title: '@co-design/primitive/Scroll',
  component: Scroll,
  argTypes: {
    type: {
      defaultValue: 'hover',
      options: ['hover', 'auto', 'always', 'scroll'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 200, height: 200 }}>
      <Scroll type="hover" style={{ height: 200 }} {...props}>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </Scroll>
    </div>
  );
};
