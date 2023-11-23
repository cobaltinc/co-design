import { CoSize, createStyles } from '@co-design/styles';

export interface ProgressStylesParams {
  size: CoSize | number;
}

export default createStyles((theme, { size }: ProgressStylesParams) => {
  const fontSizes = {
    xsmall: theme.foundations.typography.body.caption.fontSize,
    small: theme.foundations.typography.body['body-02'].fontSize,
    medium: theme.foundations.typography.body['body-02'].fontSize,
    large: theme.foundations.typography.body['body-01'].fontSize,
    xlarge: theme.foundations.typography.body['body-01'].fontSize,
  };

  return {
    root: {
      position: 'relative',
    },

    label: {
      fontSize: theme.fn.size({ size, sizes: fontSizes }),
    },
  };
});
