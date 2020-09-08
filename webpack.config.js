const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';
// const mode = isProduction ? 'production' : 'development';
// const devtool = isProduction ? false : 'inline-source-map';

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // Enable webpack find ts and tsx files without an extension
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [new HtmlWebpackPlugin()],
};
