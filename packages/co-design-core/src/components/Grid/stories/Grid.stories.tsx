import React from 'react';
import { View } from '../../View';
import { Grid } from '../Grid';
import { Col } from '../Col';

export default {
  title: '@co-design/core/Grid',
  component: Grid,
  argTypes: {
    columns: {
      control: { type: 'number' },
    },
    spacing: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    grow: {
      control: { type: 'boolean' },
    },
    justify: {
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    columns: 12,
    spacing: 'medium',
    grow: false,
    justify: 'start',
    align: 'start',
  },
};

const Box1 = () => {
  return <View co={(theme) => ({ backgroundColor: theme.primaryColor, width: '100%', minHeight: 100 })} />;
};

const Box2 = () => {
  return <View co={(theme) => ({ backgroundColor: theme.palettes.blue[6], width: '100%', minHeight: 150 })} />;
};

export const Default = {
  render: (props) => {
    return (
      <div>
        <Grid {...props}>
          <Col span={3}>
            <Box1 />
          </Col>
          <Col span={4}>
            <Box1 />
          </Col>
          <Col span={3}>
            <Box2 />
          </Col>
          <Col span={4}>
            <Box1 />
          </Col>
          <Col span={5}>
            <Box2 />
          </Col>
          <Col span={2}>
            <Box1 />
          </Col>
          <Col span={5}>
            <Box2 />
          </Col>
          <Col span={2}>
            <Box1 />
          </Col>
          <Col span={12}>
            <Box2 />
          </Col>
        </Grid>
      </div>
    );
  },
};
