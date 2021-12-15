import type { CoTheme } from '../theme';
import type { CSSObject } from './types';
import { fromEntries } from './utils/fromEntries';
import { useCss } from './useCss';
import { useCoTheme, useCoThemeStyles } from '../theme/CoProvider';
import { mergeClassNames } from './utils/mergeClassNames';

export interface UseStylesOptions {
  co?: CSSObject | ((theme: CoTheme) => CSSObject);
  name: string;
}

export function createStyles<Key extends string = string, Params = void>(
  getCssObjectOrCssObject:
    | ((theme: CoTheme, params: Params, createRef: (refName: string) => string) => Record<Key, CSSObject>)
    | Record<Key, CSSObject>,
) {
  const getCssObject = typeof getCssObjectOrCssObject === 'function' ? getCssObjectOrCssObject : () => getCssObjectOrCssObject;

  function useStyles(params: Params, options?: UseStylesOptions) {
    const theme = useCoTheme();
    const themeStyles = useCoThemeStyles()[options?.name];

    const { css, cx } = useCss();

    let count = 0;

    function createRef(refName: string) {
      count += 1;
      return `co-ref_${refName || ''}_${count}`;
    }

    const cssObject = getCssObject(theme, params, createRef);

    const _themeStyles = typeof themeStyles === 'function' ? themeStyles(theme) : themeStyles || {};
    const _co = typeof options?.co === 'function' ? options.co(theme) : options?.co;

    const classes = fromEntries(
      Object.keys(cssObject).map((key) => {
        const _mergedStyles = cx(css(cssObject[key]), css(_themeStyles[key]));
        const mergedStyles = key === 'root' ? cx(_mergedStyles, css(_co)) : _mergedStyles;
        return [key, mergedStyles];
      }),
    ) as Record<Key, string>;

    return { classes: mergeClassNames(cx, classes, options?.name), cx, theme };
  }

  return useStyles;
}
