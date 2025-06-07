// webpack.prod.js
const path = require('path');
const common = require('./webpack.common.js');
const { mergeWithCustomize, customizeArray } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = mergeWithCustomize({
  customizeArray: customizeArray({
    plugins: 'replace',
  }),
})(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/pikachu-volleyball/',
  },
  plugins: [
    // ─── 루트 페이지 ───────────────────────
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      chunks: [
        'runtime',
        'main',
        'dark_color_scheme',
        'is_embedded_in_other_website',
      ],
      chunksSortMode: 'manual',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),

    // ─── 메인 다국어 페이지 ──────────────────
    // English
    new HtmlWebpackPlugin({
      template: 'src/en/index.html',
      filename: 'en/index.html',
      chunks: [
        'runtime',
        'main',
        'dark_color_scheme',
        'is_embedded_in_other_website',
      ],
      chunksSortMode: 'manual',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    // Korean
    new HtmlWebpackPlugin({
      template: 'src/ko/index.html',
      filename: 'ko/index.html',
      chunks: [
        'runtime',
        'ko',
        'dark_color_scheme',
        'is_embedded_in_other_website',
      ],
      chunksSortMode: 'manual',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    // Chinese
    new HtmlWebpackPlugin({
      template: 'src/zh/index.html',
      filename: 'zh/index.html',
      chunks: [
        'runtime',
        'main',
        'dark_color_scheme',
        'is_embedded_in_other_website',
      ],
      chunksSortMode: 'manual',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),

    // ─── 업데이트 이력 페이지 ────────────────
    // English
    new HtmlWebpackPlugin({
      template: 'src/en/update-history/index.html',
      filename: 'en/update-history/index.html',
      chunks: ['dark_color_scheme'],
      chunksSortMode: 'manual',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    // Korean
    new HtmlWebpackPlugin({
      template: 'src/ko/update-history/index.html',
      filename: 'ko/update-history/index.html',
      chunks: ['dark_color_scheme'],
      chunksSortMode: 'manual',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    // Chinese
    new HtmlWebpackPlugin({
      template: 'src/zh/update-history/index.html',
      filename: 'zh/update-history/index.html',
      chunks: ['dark_color_scheme'],
      chunksSortMode: 'manual',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
});
