const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const DashboardPlugin = require('webpack-dashboard/plugin');

const webpackCompiler = webpack(webpackConfig);
// Webpack dashboard
webpackCompiler.apply(new DashboardPlugin());

// Enable webpack middleware for hot-reloads in development
const useWebpackMiddleware = app => {
  app.use(webpackHotMiddleware(webpackCompiler, {
    log: () => {},
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      timings: true,
    },
  }));

  app.use(webpackDevMiddleware(webpackCompiler, {
    quiet: true,
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));

  return app;
};

module.exports = { useWebpackMiddleware };
