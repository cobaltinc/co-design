import React from 'react';
import { View } from '../../View';
import { Grid } from '../Grid';
import { Col } from '../Col';

export default {
  title: '@co-design/core/Grid',
  component: Grid,
  argTypes: {
    columns: {
      defaultValue: 12,
      control: { type: 'number' },
    },
    spacing: {
      defaultValue: 'spacing2',
      options: ['spacing0', 'spacing1', 'spacing2', 'spacing3', 'spacing4', 'spacing5', 'spacing6', 'spacing7', 'spacing8', 'spacing9'],
      control: { type: 'inline-radio' },
    },
    grow: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    justify: {
      defaultValue: 'start',
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
    align: {
      defaultValue: 'start',
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
  },
};

const Box1 = () => {
  return <View co={(theme) => ({ backgroundColor: theme.primaryColor, width: '100%', minHeight: 100 })} />;
};

const Box2 = () => {
  return <View co={(theme) => ({ backgroundColor: theme.palettes.blue[6], width: '100%', minHeight: 150 })} />;
};

export const Default = (props) => {
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
};
