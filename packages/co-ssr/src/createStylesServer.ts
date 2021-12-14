import createEmotionServer from '@emotion/server/create-instance';
import { getCache } from '@co/styles';

export function createStylesServer() {
  return createEmotionServer(getCache());
}
