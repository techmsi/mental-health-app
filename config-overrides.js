const {
  override,
  addWebpackAlias,
  addBundleVisualizer,
  addWebpackPlugin,
} = require('customize-cra');
const WebpackBar = require('webpackbar');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const analyzer = process.env.NODE_ENV !== 'production' ? addBundleVisualizer(): null;
module.exports = override(
  addWebpackAlias({
    react: 'preact/compat',
    'react-dom': 'preact/compat'
  }),
  addWebpackPlugin(
    new WebpackBar(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
      inlineManifest: true,
    })
  ),
  analyzer
);
