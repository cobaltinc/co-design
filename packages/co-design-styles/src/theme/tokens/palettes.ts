import type { Tuple } from '../types';

export type CoPalette = 'dark' | 'gray' | 'purple' | 'blue' | 'red' | 'orange' | 'green' | (string & {});

export const DEFAULT_PALETTES = {
  dark: ['#EBEBEC', '#C3C4C6', '#9A9BA1', '#71747C', '#54575F', '#474A52', '#383B43', '#2F3137', '#23252A', '#1A1B1F'],

  gray: ['#FCFCFD', '#F6F7F9', '#E9EBF0', '#D5DADF', '#9BA3AE', '#7D838F', '#5D636D', '#343942', '#232830', '#171B24'],

  purple: ['#F6F2FF', '#E8DAFF', '#D4BBFF', '#BE95FF', '#A56EFF', '#8A3FFC', '#6929C4', '#491D8B', '#31135E', '#200050'],

  blue: ['#EDF5FF', '#D0E2FF', '#A6C8FF', '#78A9FF', '#4589FF', '#0F62FE', '#0043CE', '#002D9C', '#001D6C', '#011754'],

  red: ['#FFF1F1', '#FFD7D9', '#FFB3B8', '#FF8389', '#FA4D56', '#DA1E28', '#A2191F', '#750E13', '#570408', '#420003'],

  orange: ['#FFF9F2', '#FADFC3', '#F3C087', '#F6A851', '#ED8C23', '#E07602', '#A65701', '#8B4901', '#673401', '#4A2700'],

  green: ['#EFFFF4', '#C9F4D8', '#96E2B0', '#68D08C', '#3FB768', '#24AD53', '#1B803E', '#0E5B28', '#0C3F1D', '#003412'],
} as Record<CoPalette, Tuple<string, 10>>;
