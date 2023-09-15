import React, { useState } from 'react';
import { Chip } from '../Chip';

export default {
  title: '@co-design/core/Chip',
  component: Chip,
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    radius: {
      options: ['small', 'medium', 'large', 'round'],
      control: { type: 'inline-radio' },
    },
    checked: {
      control: { type: 'boolean' },
    },
  },
  args: {
    size: 'small',
    color: 'purple',
    radius: 'medium',
  },
};

export const Default = {
  render: (props) => {
    return <Chip {...props}>React</Chip>;
  },
};

export const Deletable = {
  render: (props) => {
    const [chips, setChips] = useState(['React', 'Angular', 'Svelte', 'Vue']);
    return (
      <div>
        {chips.map((chip) => (
          <Chip
            key={chip}
            value={chip}
            radius={props.radius}
            size={props.size}
            onDelete={() => {
              setChips(chips.filter((c) => c !== chip));
            }}
          >
            {chip}
          </Chip>
        ))}
      </div>
    );
  },
};
