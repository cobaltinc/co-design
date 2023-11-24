import { foundations } from '../tokens';

export type CoTypography = keyof typeof foundations.typography.body | keyof typeof foundations.typography.heading;

export type CoTypographyValue = typeof foundations.typography.body.caption;
