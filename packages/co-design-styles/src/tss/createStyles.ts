import type { Co, CoTheme } from '../theme';
import type { CSSObject } from './types';
import { fromEntries } from './utils/fromEntries';
import { useCss } from './useCss';
import { useCoTheme, useCoThemeStyles } from '../theme/CoProvider';
import { mergeClassNames } from './utils/mergeClassNames';

export interface UseStylesOptions<Key extends string> {
  co?: Co;
  overrideStyles?: Partial<Record<Key, CSSObject>> | ((theme: CoTheme) => Partial<Record<Key, CSSObject>>);
  name: string;
}

export function createStyles<Key extends string = string, Params = void>(
  getCssObjectOrCssObject:
    | ((theme: CoTheme, params: Params, createRef: (refName: string) => string) => Record<Key, CSSObject>)
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
      return `co-ref_${refName || ''}_${count}`;
    }

    const cssObject = getCssObject(theme, params, createRef);

    const _overrideStyles = typeof options?.overrideStyles === 'function' ? options?.overrideStyles(theme) : options?.overrideStyles || {};
    const _themeStyles = typeof themeStyles === 'function' ? themeStyles(theme) : themeStyles || {};
    const _co = typeof options?.co === 'function' ? options.co(theme) : options?.co;

    const classes = fromEntries(
      Object.keys(cssObject).map((key) => {
        const mergedStyles = cx(css(cssObject[key]), css(_themeStyles[key]), css(_overrideStyles[key]), css(_co));
        return [key, mergedStyles];
      }),
    ) as Record<Key, string>;

    return { classes: mergeClassNames(cx, classes, options?.name), cx, theme };
  }

  return useStyles;
}
