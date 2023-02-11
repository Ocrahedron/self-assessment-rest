require('@babel/register')
const React = require('react');
const ReactDOMServer = require('react-dom/server');


const render = (reactElement, properties, response) => {
  // properties.user = response.locals.user; // добавляем имя пользователя в пропсы, по ключу username, для компонента Layout
  const reactEl = React.createElement(reactElement, properties);

  const html = ReactDOMServer.renderToStaticMarkup(reactEl);

  response.write('<!DOCTYPE html>');
  response.write(html);
  response.end();
};

module.exports = render;
