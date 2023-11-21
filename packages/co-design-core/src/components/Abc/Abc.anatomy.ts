import { createAnatomy } from '@co-design/anatomy';

export const anatomy = createAnatomy('abc', ['root', 'label', 'text']);
export const parts = anatomy.generate();
