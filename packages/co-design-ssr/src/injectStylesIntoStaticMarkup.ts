import { createStylesServer } from './createStylesServer';
import { getSSRStyles } from './getSsrStyles';

const server = createStylesServer();

export function injectStylesIntoStaticMarkup(markup: string) {
  return markup.replace('<head>', `<head>${getSSRStyles(markup, server)}`);
}
