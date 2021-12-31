import React from 'react';
import * as Icons from '../src';

export default {
  title: '@co-design/icons',
  argTypes: {
    color: {
      control: { type: 'color' },
    },
  },
};

interface IconCardProps {
  children: React.ReactChild;
  name: string;
}

const IconCard = ({ children, name }: IconCardProps) => {
  return (
    <div
      style={{
        display: 'inline-block',
        height: 80,
        textAlign: 'center',
        border: '1px solid black',
        borderRadius: 8,
        margin: 8,
        padding: 8,
      }}
    >
      <div>{children}</div>
      <div>{name}</div>
    </div>
  );
};

export const Default = (props) => {
  return (
    <div style={{ color: props.color }}>
      <div>{Object.keys(Icons).length} icons</div>
      {Object.entries(Icons).map(([name, Icon], index) => {
        return (
          <IconCard key={index} name={name}>
            <Icon style={{ width: 32, height: 32 }} />
          </IconCard>
        );
      })}
    </div>
  );
};
