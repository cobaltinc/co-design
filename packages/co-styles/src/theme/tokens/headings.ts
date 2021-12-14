import { CSSProperties } from 'react';

export interface HeadingStyle {
  fontSize: CSSProperties['fontSize'];
  lineHeight: CSSProperties['lineHeight'];
}

export interface CoHeadings {
  h1: HeadingStyle;
  h2: HeadingStyle;
  h3: HeadingStyle;
  h4: HeadingStyle;
  h5: HeadingStyle;
  h6: HeadingStyle;
}

export const DEFAULT_HEADINGS: CoHeadings = {
  h1: { fontSize: 54, lineHeight: 1.2 },
  h2: { fontSize: 36, lineHeight: 1.3 },
  h3: { fontSize: 28, lineHeight: 1.35 },
  h4: { fontSize: 24, lineHeight: 1.45 },
  h5: { fontSize: 20, lineHeight: 1.5 },
  h6: { fontSize: 18, lineHeight: 1.5 },
};
