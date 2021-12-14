import type { Tuple } from '../types';

export type CoColor = 'dark' | 'purple' | 'blue' | 'red' | (string & {});

export const DEFAULT_COLORS = {
  dark: ['#FFF', '#FCFCFC', '#F6F7F9', '#E9EBF0', '#D5DADF', '#9BA3AE', '#7D838F', '#5D636D', '#343942', '#171B24'],

  purple: ['#FFF', '#F6F2FF', '#E8DAFF', '#D4BBFF', '#BE95FF', '#A56EFF', '#8A3FFC', '#6929C4', '#491D8B', '#31135E'],

  blue: ['#FFF', '#EDF5FF', '#D0E2FF', '#A6C8FF', '#78A9FF', '#4589FF', '#0F62FE', '#0043CE', '#002D9C', '#001D6C'],

  red: ['#FFF', '#FFF1F1', '#FFD7D9', '#FFB3B8', '#FF8389', '#FA4D56', '#DA1E28', '#A2191F', '#750E13', '#570408'],

  white: '#FFF',

  black: '#000',
} as Record<CoColor, Tuple<string, 10> | string>;
