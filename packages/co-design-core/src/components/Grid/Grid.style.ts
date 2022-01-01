import { createStyles, CoSpacing } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface GridStyles {
  spacing: CoSpacing | number;
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignContent'];
}

export default createStyles((theme, { justify, align, spacing }: GridStyles) => ({
  root: {
    margin: -getFieldValue(spacing, theme.spacing) / 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: justify,
    alignItems: align,
  },
}));
