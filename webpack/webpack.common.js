const path = require('path')
const eslint = require('eslint')
const webpack = require('webpack')
const convert = require('koa-connect')
const history = require('connect-history-api-fallback')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const commonPaths = require('./paths')

const context = commonPaths.appIndexJs
const PUBLIC_PATH = commonPaths.publicUrl || '/'
const isEnvProduction = process.env.NODE_ENV === 'production'

module.exports = {
  context,
  entry: commonPaths.appIndexJs,
  output: {
    path: path.resolve(__dirname, '../', 'build'),
    filename: 'bucket/js/[name]-bundle.js',
    publicPath: PUBLIC_PATH,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          formatter: eslint.CLIEngine.getFormatter('stylish'),
          emitWarning: process.env.NODE_ENV !== 'production',
        },
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder,
            },
          },
        ],
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder,
            },
          },
        ],
      },
    ],
  },
  serve: {
    add: (app) => {
      app.use(convert(history()))
    },
    content: commonPaths.appIndexJs,
    dev: {
      publicPath: commonPaths.appBuild,
    },
    open: true,
  },
  resolve: {
    modules: [
      'node_modules',
      'src',
      commonPaths.globalConstants, // Enable absolute imports from globalConstants
      commonPaths.coreContainers, // Enable absolute imports from coreContainers
      commonPaths.utils, // Enable absolute imports from coreContainers
    ],
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {
      globalConstants: commonPaths.globalConstants,
      coreContainers: commonPaths.coreContainers,
      utils: commonPaths.utils,
    },
  },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: commonPaths.appHtml,
      ...(isEnvProduction
        ? {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        }
        : undefined),
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
  ],
}
