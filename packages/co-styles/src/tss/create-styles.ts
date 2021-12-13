import type { MantineTheme } from '../theme';
import type { CSSObject } from './types';
import { fromEntries } from './utils/fromEntries';
import { useCss } from './useCss';
import { useCoTheme, useCoThemeStyles } from '../theme/CoProvider';
import { mergeClassNames } from './utils/mergeClassNames';

export interface UseStylesOptions<Key extends string> {
  classNames?: Partial<Record<Key, string>>;
  sx?: CSSObject | ((theme: MantineTheme) => CSSObject);
  styles?: Partial<Record<Key, CSSObject>> | ((theme: MantineTheme) => Partial<Record<Key, CSSObject>>);
  name: string;
}

export function createStyles<Key extends string = string, Params = void>(
  getCssObjectOrCssObject:
    | ((theme: MantineTheme, params: Params, createRef: (refName: string) => string) => Record<Key, CSSObject>)
    | Record<Key, CSSObject>,
) {
  const getCssObject = typeof getCssObjectOrCssObject === 'function' ? getCssObjectOrCssObject : () => getCssObjectOrCssObject;

  function useStyles(params: Params, options?: UseStylesOptions<Key>) {
    const theme = useCoTheme();
    const themeStyles = useCoThemeStyles()[options?.name];

    const { css, cx } = useCss();

    let count = 0;

    function createRef(refName: string) {
      count += 1;
      return `mantine-ref_${refName || ''}_${count}`;
    }

    const cssObject = getCssObject(theme, params, createRef);

    const _styles = typeof options?.styles === 'function' ? options?.styles(theme) : options?.styles || {};
    const _themeStyles = typeof themeStyles === 'function' ? themeStyles(theme) : themeStyles || {};
    const _sx = typeof options?.sx === 'function' ? options.sx(theme) : options?.sx;

    const classes = fromEntries(
      Object.keys(cssObject).map((key) => {
        const _mergedStyles = cx(css(cssObject[key]), css(_themeStyles[key]), css(_styles[key]));
        const mergedStyles = key === 'root' ? cx(_mergedStyles, css(_sx)) : _mergedStyles;
        return [key, mergedStyles];
      }),
    ) as Record<Key, string>;

    return { classes: mergeClassNames(cx, classes, options?.classNames, options?.name), cx, theme };
  }

  return useStyles;
}
