import React, { useCallback } from 'react';

type Ref<T> = React.Dispatch<React.SetStateAction<T>> | React.ForwardedRef<T>;

const assignRef = <T = any>(ref: React.ForwardedRef<T>, value: T | null) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (typeof ref === 'object' && ref !== null && 'current' in ref) {
    ref.current = value;
  }
};

export const useMergedRef = <T = any>(...refs: Ref<T>[]) => {
  return useCallback((node: T | null) => {
    refs.forEach((ref) => assignRef(ref, node));
  }, refs);
};

export const mergeRefs = <T = any>(...refs: Ref<T>[]) => {
  return (node: T | null) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
};
