const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const isNotProduction = process.env.NODE_ENV !== 'production';
const appFolder = 'app';

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const buildPath = path.resolve(__dirname, 'public', 'build');
const mainPath = path.resolve(__dirname, appFolder, 'client.js');

const productionOptimizationPlugins = [
 new webpack.optimize.CommonsChunkPlugin('common.js'),
 new webpack.optimize.DedupePlugin(),
 new webpack.optimize.UglifyJsPlugin(),
 new webpack.optimize.AggressiveMergingPlugin()
]

const devConfig = {
  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client'],
  hotUpdateChunkFilename: './.hot/[id].[hash].hot-update.js',
  hotUpdateMainFilename: './.hot/[hash].hot-update.json',
  babelHotPlugin: 'react-hot-loader/babel',
  webpackCacheFolder:'./.webpack-cache/',
  publicPathFolder: '/'
}

const baseConfig = {
  entry: [ mainPath ],
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  sassLoader: {
    includePaths: [ 'scss/' ]
  },
  cache: true,
  progress: true,
  devtool: 'source-map',
  watch: false,
  module: {
    loaders: [
      {
        test:/\.js$/,
        exclude: [nodeModulesPath],
        loader: 'babel',
        query: {
          compact: false,
          cacheDirectory: isNotProduction ? devConfig.webpackCacheFolder : false,
          presets: [ 'es2015', 'stage-2', 'react' ],
          plugins: [
           'transform-class-properties'
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?sourceMap',
          'sass?sourceMap',
          ExtractTextPlugin.extract('css!sass')
        ]
      },
      {
        include: /\.json$/,
        loaders: ['json-loader']
      }
    ],
    postcss: [
      autoprefixer({
        browsers: ['last 2 versions', '> 1%']
      })
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.json', '.js', '.jsx'],
    alias: {
      'containers': path.join(__dirname, 'app', 'containers')
    // images: path.join(__dirname, 'public/images')
    //   'react': 'react-lite',
    //   'react-dom': 'react-lite'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('css/style.css', {
        allChunks: true
    })
  ]
};


const babelLoader = baseConfig.module.loaders.filter( o => o.loader === 'babel');

baseConfig.output.hotUpdateMainFilename = devConfig.hotUpdateMainFilename;
baseConfig.output.hotUpdateChunkFilename = devConfig.hotUpdateChunkFilename;
baseConfig.output.publicPath = devConfig.publicPathFolder;
baseConfig.plugins = [new webpack.HotModuleReplacementPlugin(), ...baseConfig.plugins];
baseConfig.entry = [...devConfig.entry, ...baseConfig.entry];


module.exports = baseConfig;
