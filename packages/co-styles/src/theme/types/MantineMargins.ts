import type { CoNumberSize } from './CoSize';

export type MantineMargin = 'm' | 'my' | 'mx' | 'mt' | 'mb' | 'ml' | 'mr';
type MarginValue = CoNumberSize | 'auto';

export interface MantineMargins {
  m?: MarginValue;
  my?: MarginValue;
  mx?: MarginValue;
  mt?: MarginValue;
  mb?: MarginValue;
  ml?: MarginValue;
  mr?: MarginValue;
}
