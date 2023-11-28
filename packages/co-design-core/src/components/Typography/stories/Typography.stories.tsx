import { foundations } from '@co-design/styles';
import { Typography } from '../Typography';
import { Stack } from '../../Stack';
import { Button } from '../../Button';

export default {
  title: '@co-design/core/Typography',
  component: Typography,
  argTypes: {
    children: {
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      control: { type: 'Typography' },
    },
    variant: {
      options: [Object.keys(foundations.typography.body), Object.keys(foundations.typography.heading)].flat(),
      control: { type: 'inline-radio' },
    },
    strong: {
      control: { type: 'boolean' },
    },
    underline: {
      control: { type: 'boolean' },
    },
    block: {
      control: { type: 'boolean' },
    },
    transform: {
      options: [undefined, 'capitalize', 'uppercase', 'lowercase'],
      control: { type: 'inline-radio' },
    },
    align: {
      options: [undefined, 'left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    lineClamp: {
      control: { type: 'number' },
    },
    color: {
      options: [undefined, ...Object.keys(foundations.tokens.color.text)],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    strong: false,
    underline: false,
    block: false,
  },
};

export const Default = {
  render: (props) => {
    return (
      <div style={{ width: 300 }}>
        <Typography {...props} />
      </div>
    );
  },
};

export const Inherit = () => {
  return (
    <div>
      <Typography variant="heading_03" block>
        <Typography inherit underline>
          Lorem
        </Typography>{' '}
        ipsum dolor sit amet,{' '}
        <Typography
          variant="body_02"
          strong
          co={(theme) => ({
            background: theme.fn.linearGradient(90, 'red', 'green', 'blue'),
            backgroundClip: 'text',
            color: 'transparent',
          })}
          disableTextboxTrim
        >
          consectetur
        </Typography>{' '}
        <Typography inherit transform="uppercase">
          adipiscing
        </Typography>{' '}
        elit.
      </Typography>
    </div>
  );
};

export const Multi = () => {
  return (
    <Stack>
      <Typography
        co={{
          backgroundColor: 'sandybrown',
        }}
      >
        Lorem
      </Typography>
      <Typography
        co={{
          backgroundColor: 'sandybrown',
        }}
      >
        ipsum dolor sit amet,
      </Typography>
      <Typography
        co={{
          backgroundColor: 'sandybrown',
        }}
      >
        consectetur
      </Typography>
    </Stack>
  );
};

export const TextboxTrim = {
  render: (props) => {
    return (
      <div style={{ width: 300 }}>
        <Stack>
          <Typography
            variant="body_01"
            co={{
              backgroundColor: 'sandybrown',
            }}
            {...props}
          />
          <Button>hello</Button>
        </Stack>
      </div>
    );
  },
};
