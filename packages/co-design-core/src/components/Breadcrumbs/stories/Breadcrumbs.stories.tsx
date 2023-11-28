import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import { Typography } from '../../Typography';

export default {
  title: '@co-design/core/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    separator: {
      control: { type: 'text' },
    },
    spacing: {
      control: { type: 'number' },
    },
  },
  args: {
    spacing: 8,
  },
};

export const Default = {
  render: (props) => {
    return (
      <Breadcrumbs {...props}>
        <Typography color="text_caption">Co Design</Typography>
        <Typography color="text_caption">Components</Typography>
        <Typography color="text_caption">Breadcrumbs</Typography>
      </Breadcrumbs>
    );
  },
};

export const OverrideStyles = {
  render: (props) => {
    return (
      <Breadcrumbs
        {...props}
        overrideStyles={{
          root: {},
          breadcrumb: {
            color: 'teal',
          },
          separator: {
            border: '1px solid green',
          },
        }}
      >
        <Typography color="text_caption">Co Design</Typography>
        <button disabled>hello</button>
        <Typography color="text_caption">Components</Typography>
        <Typography color="text_caption">Breadcrumbs</Typography>
      </Breadcrumbs>
    );
  },
};
