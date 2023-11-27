import { Avatar } from '../Avatar';
import { Badge } from '../../Badge';
import { foundations, useCoTheme } from '@co-design/styles';

export default {
  title: '@co-design/core/Avatar',
  component: Avatar,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    src: {
      control: { type: 'text' },
    },
    shape: {
      options: ['square', 'round', 'circle'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: Object.keys(foundations.color),
      control: { type: 'inline-radio' },
    },
  },
  args: {
    src: 'https://fastly.picsum.photos/id/786/600/400.jpg?hmac=vrVktsOjvWZxfPkgOvYp5fejC9rXMVAjyABIkuYkvso',
    shape: 'circle',
    size: 'medium',
  },
};

export const Default = {
  render: (props) => {
    return (
      <div>
        <Avatar {...props} />
      </div>
    );
  },
};

export const AvatarBadge = {
  render: (props) => {
    return (
      <div>
        <Badge size="medium" placeDistance={2}>
          <Avatar {...props} />
        </Badge>
      </div>
    );
  },
};

export const AvatarIconBadge = {
  render: (props) => {
    const theme = useCoTheme();

    return (
      <div>
        <Badge
          badgeContent={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.6466 2L6.57329 10.1133L6.29996 10.6533L6.27996 11.0867L6.14663 13.6333H3.33329L2.66663 14.6333H6.09329L8.82663 12.3667L9.15996 12.0933L9.43329 11.5533L13.5066 3.43333L10.6466 2ZM8.53996 11.1L8.46663 11.06L7.47329 10.56L11.0933 3.34L12.1666 3.88L8.53996 11.1Z"
                fill="white"
              />
            </svg>
          }
          size="small"
          placement="bottom-right"
          placeDistanceX={-4}
          placeDistanceY={0}
          overrideStyles={{
            badge: {
              backgroundColor: theme.foundations.tokens.color.bg['bg-primary'],
            },
          }}
        >
          <Avatar {...props} />
        </Badge>
      </div>
    );
  },
};

export const PlaceholderAvatar = {
  render: () => {
    return (
      <div>
        <Avatar />
      </div>
    );
  },
};

export const TextAvatar = {
  render: (props) => {
    return (
      <div>
        <Avatar {...props}>Kim Da Yeon</Avatar>
      </div>
    );
  },
};

export const OverrideStyles = {
  render: (props) => {
    return (
      <div>
        Grayscale filter
        <Avatar
          {...props}
          src="https://fastly.picsum.photos/id/786/600/400.jpg?hmac=vrVktsOjvWZxfPkgOvYp5fejC9rXMVAjyABIkuYkvso"
          overrideStyles={{
            image: {
              filter: 'grayscale(80%)',
            },
          }}
        />
      </div>
    );
  },
};
