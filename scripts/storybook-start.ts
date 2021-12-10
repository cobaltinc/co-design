import path from 'path';
import { argv } from 'yargs';
import storybook from '@storybook/react/standalone';

storybook({
  port: 6006,
  mode: 'dev',
  configDir: path.join(__dirname, '../config/storybook'),
});
