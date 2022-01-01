import React, { useState } from 'react';
import { Overlay } from '../Overlay';

export default {
  title: '@co-design/core/Overlay',
  component: Overlay,
  argTypes: {
    opacity: {
      options: ['opacity1', 'opacity2', 'opacity3', 'opacity4', 'opacity5', 'opacity6'],
      control: { type: 'inline-radio' },
    },
    radius: {
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: '#000',
      control: { type: 'color' },
    },
  },
};

export const Default = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div style={{ height: 100, position: 'relative' }}>
        {visible && <Overlay {...props} />}
        <button color={visible ? 'red' : 'teal'}>{!visible ? 'Click as much as you like' : "Won't click, haha"}</button>
      </div>

      <button onClick={() => setVisible((v) => !v)}>Overlay</button>
    </>
  );
};
