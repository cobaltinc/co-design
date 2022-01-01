const React = require('react');
const { renderToString } = require('react-dom/server');
const { createStylesServer, ServerStyles } = require('@co-design/ssr');

const stylesServer = createStylesServer();

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const html = renderToString(bodyComponent);
  setHeadComponents([React.createElement(ServerStyles, { html: html, server: stylesServer, key: 'co-design' })]);
  replaceBodyHTMLString(html);
};
