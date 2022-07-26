const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const commonPaths = require('./paths')

const PROXY_PORT = process.env.PROXY_PORT || 8000

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCase',
              modules: {
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true,
    historyApiFallback: true,
    port: 3000,
    proxy: {
      '/api': `http://localhost:${PROXY_PORT}`,
      '/media': `http://localhost:${PROXY_PORT}`,
    },
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: true,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: false,
      warnings: false,
      publicPath: false,
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new Dotenv()],
}
