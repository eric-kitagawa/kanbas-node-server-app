import path from 'path';

export default {
  mode: 'production',
  entry: './index.js', // Adjust this to your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'), // Adjust the output path if needed
  },
};
