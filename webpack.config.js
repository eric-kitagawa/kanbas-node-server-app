import path from 'path';
import webpack from 'webpack';

export default {
  mode: 'production', // or 'development'
  entry: './index.js', // Adjust this to your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      zlib: require.resolve('browserify-zlib'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      buffer: require.resolve('buffer/'),
      process: require.resolve('process/browser'),
      url: require.resolve('url/'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
};
