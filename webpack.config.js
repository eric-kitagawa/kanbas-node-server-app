const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js', // Adjust to match your app's entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
