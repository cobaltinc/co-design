import { useCallback, useEffect, useMemo } from 'react';

export type HotKey = {
  global?: boolean;
  combo: string;
  onKeyDown?(e: KeyboardEvent): void;
  onKeyUp?(e: KeyboardEvent): void;
};

export type KeyCombo = {
  modifiers: number;
  key: string;
};

type CallbackEvent = 'onKeyDown' | 'onKeyUp';

const ModifierBitMasks = {
  alt: 1,
  ctrl: 2,
  meta: 4,
  shift: 8,
};

const ShiftKeys = {
  '~': '`',
  '!': '1',
  '@': '2',
  '#': '3',
  $: '4',
  '%': '5',
  '^': '6',
  '&': '7',
  '*': '8',
  '(': '9',
  ')': '0',
  _: '-',
  '+': '=',
  '{': '[',
  '}': ']',
  '|': '\\',
  ':': ';',
  '"': "'",
  '<': ',',
  '>': '.',
  '?': '/',
};

const Aliases = {
  win: 'meta',
  window: 'meta',
  cmd: 'meta',
  command: 'meta',
  esc: 'escape',
  opt: 'alt',
  option: 'alt',
  left: 'arrowleft',
  right: 'arrowright',
  up: 'arrowup',
  down: 'arrowdown',
};

const getKeyCombo = (e: KeyboardEvent) => {
  const key = e.key !== ' ' ? e.key.toLowerCase() : 'space';

  let modifiers = 0;
  if (e.altKey) modifiers += ModifierBitMasks.alt;
  if (e.ctrlKey) modifiers += ModifierBitMasks.ctrl;
  if (e.metaKey) modifiers += ModifierBitMasks.meta;
  if (e.shiftKey) modifiers += ModifierBitMasks.shift;

  return { modifiers, key };
};

const parseKeyCombo = (combo: string): KeyCombo => {
  const pieces = combo.replace(/\s/g, '').toLowerCase().split('+');
  let modifiers = 0;
  let key;
  for (const piece of pieces) {
    if ((ModifierBitMasks as any)[piece]) {
      modifiers += (ModifierBitMasks as any)[piece];
    } else if ((ModifierBitMasks as any)[(Aliases as any)[piece]]) {
      modifiers += (ModifierBitMasks as any)[(Aliases as any)[piece]];
    } else if ((ShiftKeys as any)[piece]) {
      modifiers += ModifierBitMasks.shift;
      key = (ShiftKeys as any)[piece];
    } else if ((Aliases as any)[piece]) {
      key = (Aliases as any)[piece];
    } else {
      key = piece;
    }
  }

  return { modifiers, key };
};

const comboMatches = (a: KeyCombo, b: KeyCombo) => {
  return a.modifiers === b.modifiers && a.key === b.key;
};

export const useHotKey = (hotkeys: HotKey[]) => {
  const localKeys = useMemo(() => hotkeys.filter((k) => !k.global), [hotkeys]);
  const globalKeys = useMemo(() => hotkeys.filter((k) => k.global), [hotkeys]);

  const invokeCallback = useCallback(
    (global, combo, callbackName, e) => {
      for (const hotkey of global ? globalKeys : localKeys) {
        if (comboMatches(parseKeyCombo(hotkey.combo), combo)) {
          hotkey[callbackName as CallbackEvent]?.(e);
        }
      }
    },
    [localKeys, globalKeys],
  );

  const handleGlobalKeyDown = useCallback(
    (e) => {
      invokeCallback(true, getKeyCombo(e), 'onKeyDown', e);
    },
    [invokeCallback],
  );

  const handleGlobalKeyUp = useCallback(
    (e) => {
      invokeCallback(true, getKeyCombo(e), 'onKeyUp', e);
    },
    [invokeCallback],
  );

  const handleLocalKeyDown = useCallback(
    (e) => {
      invokeCallback(false, getKeyCombo(e.nativeEvent), 'onKeyDown', e.nativeEvent);
    },
    [invokeCallback],
  );

  const handleLocalKeyUp = useCallback(
    (e) => {
      invokeCallback(false, getKeyCombo(e.nativeEvent), 'onKeyUp', e.nativeEvent);
    },
    [invokeCallback],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeyDown);
    document.addEventListener('keyup', handleGlobalKeyUp);

    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown);
      document.removeEventListener('keyup', handleGlobalKeyUp);
    };
  }, [handleGlobalKeyDown, handleGlobalKeyUp]);

  return { handleKeyDown: handleLocalKeyDown, handleKeyUp: handleLocalKeyUp };
};
