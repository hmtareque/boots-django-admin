var path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, './src/static/js'),
    filename: 'app.js',
  },
};

