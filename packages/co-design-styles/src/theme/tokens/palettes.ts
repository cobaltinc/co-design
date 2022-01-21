import type { Tuple } from '../types';

export type CoPalette = 'dark' | 'purple' | 'blue' | 'red' | 'orange' | (string & {});

export const DEFAULT_PALETTES = {
  dark: ['#FFF', '#FCFCFC', '#F6F7F9', '#E9EBF0', '#D5DADF', '#9BA3AE', '#7D838F', '#5D636D', '#343942', '#171B24'],

  purple: ['#FFF', '#F6F2FF', '#E8DAFF', '#D4BBFF', '#BE95FF', '#A56EFF', '#8A3FFC', '#6929C4', '#491D8B', '#31135E'],

  blue: ['#FFF', '#EDF5FF', '#D0E2FF', '#A6C8FF', '#78A9FF', '#4589FF', '#0F62FE', '#0043CE', '#002D9C', '#001D6C'],

  red: ['#FFF', '#FFF1F1', '#FFD7D9', '#FFB3B8', '#FF8389', '#FA4D56', '#DA1E28', '#A2191F', '#750E13', '#570408'],

  orange: ['#FFF', '#FFF9F2', '#FADFC3', '#F3C087', '#F6A851', '#ED8C23', '#E07602', '#A65701', '#8B4901', '#673601'],

  green: ['#FFF', '#EFFFF4', '#C9F4D8', '#96E2B0', '#68D08C', '#3FB768', '#24AD53', '#1B803E', '#0E5B28', '#0C3F1D'],

  yellow: ['#FFF', '#fff9db', '#fff3bf', '#ffec99', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700'],
} as Record<CoPalette, Tuple<string, 10>>;
