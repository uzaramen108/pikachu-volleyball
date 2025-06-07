const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    main: './src/resources/js/main.js',
    ko: './src/ko/ko.js',
    dark_color_scheme: './src/resources/js/utils/dark_color_scheme.js',
    is_embedded_in_other_website:
      './src/resources/js/utils/is_embedded_in_other_website.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          context: 'src/',
          from: 'resources/assets/**/*.+(json|png|mp3|wav)',
        },
        { from: 'src/en/manifest.json', to: 'en/manifest.json' },
        { from: 'src/ko/manifest.json', to: 'ko/manifest.json' },
        { from: 'src/zh/manifest.json', to: 'zh/manifest.json' },
        { from: 'src/resources/style.css', to: 'resources/style.css' },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      cleanupOutdatedCaches: true,
      skipWaiting: false,
    }),
  ],
};
