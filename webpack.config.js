const path = require('path');
const dotenv = require('dotenv-webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    contentBase: path.resolve(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  // watch: true,
  resolve: {
    // Enable webpack find ts and tsx files without an extension
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [new dotenv()],
  // plugins: [new HtmlWebpackPlugin()],
};
