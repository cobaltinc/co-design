import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicEffect = typeof document !== 'undefined' ? useLayoutEffect : useEffect;
