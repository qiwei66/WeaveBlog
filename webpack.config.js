const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: process.env.NODE_ENV === 'production' ? '/weave-blog/' : '/',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body'
    }),
    new Dotenv({
      systemvars: true,
      defaults: true
    }),
    new webpack.DefinePlugin({
      'process.env.CLIENT_ID': JSON.stringify(process.env.CLIENT_ID || 'Ov23livWSse2QqzI4HYd'),
      'process.env.CLIENT_SECRET': JSON.stringify(process.env.CLIENT_SECRET || 'fadae17a05e1bd3ec2dea634e66989c2f95e7a5c')
    })
  ],
  devServer: {
    port: 3333,
    historyApiFallback: true,
    allowedHosts: ['all', '.alibaba-inc.com', '.github.io']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
