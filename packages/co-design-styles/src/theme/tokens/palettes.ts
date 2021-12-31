import type { Tuple } from '../types';

export type CoPalette = 'dark' | 'purple' | 'blue' | 'red' | 'orange' | (string & {});

export const DEFAULT_PALETTES = {
  dark: ['#FFF', '#FCFCFC', '#F6F7F9', '#E9EBF0', '#D5DADF', '#9BA3AE', '#7D838F', '#5D636D', '#343942', '#171B24'],

  purple: ['#FFF', '#F6F2FF', '#E8DAFF', '#D4BBFF', '#BE95FF', '#A56EFF', '#8A3FFC', '#6929C4', '#491D8B', '#31135E'],

  blue: ['#FFF', '#EDF5FF', '#D0E2FF', '#A6C8FF', '#78A9FF', '#4589FF', '#0F62FE', '#0043CE', '#002D9C', '#001D6C'],

  red: ['#FFF', '#FFF1F1', '#FFD7D9', '#FFB3B8', '#FF8389', '#FA4D56', '#DA1E28', '#A2191F', '#750E13', '#570408'],

  orange: ['#FFF', '#fff4e6', '#ffe8cc', '#ffd8a8', '#ffa94d', '#ff922b', '#fd7e14', '#f76707', '#e8590c', '#d9480f'],

  green: ['#FFF', '#ebfbee', '#d3f9d8', '#b2f2bb', '#69db7c', '#51cf66', '#40c057', '#37b24d', '#2f9e44', '#2b8a3e'],

  yellow: ['#FFF', '#fff9db', '#fff3bf', '#ffec99', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700'],
} as Record<CoPalette, Tuple<string, 10>>;
