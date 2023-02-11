const render = require('../utils/render');
const Error = require('../views/Error');
const Main = require('../views/pages/Main');

exports.mainPageAllChannelsController = async (req, res) => {
  try {
    render(Main, {}, res);
  } catch (error) {
    render(Error, {
      message: 'Не удалось войти на главную страницу.',
      error: {},
    }, res);
  }
};
