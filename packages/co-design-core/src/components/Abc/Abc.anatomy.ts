import { createAnatomy } from './createAnatomy';

export const anatomy = createAnatomy('abc').parts('root', 'label', 'text');
export const parts = anatomy.build();
